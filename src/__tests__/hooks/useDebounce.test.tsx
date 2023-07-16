import {renderHook, act} from '@testing-library/react-hooks';
import {useDebounce} from '~Root/hooks/useDebounce';

describe('useDebounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it('should return the initial value', () => {
    const values = [1, 2, 3];
    const delay = 500;
    const {result} = renderHook(() => useDebounce(values, delay));

    expect(result.current).toEqual(values);
  });

  it('should debounce the value update', () => {
    const values = [1, 2, 3];
    const newValues = [4, 5, 6];
    const delay = 500;
    const {result, rerender} = renderHook(
      ({values, delay}) => useDebounce(values, delay),
      {
        initialProps: {values, delay},
      },
    );

    act(() => {
      rerender({values: newValues, delay});
    });

    expect(result.current).toEqual(values);

    act(() => {
      jest.advanceTimersByTime(delay);
    });

    expect(result.current).toEqual(newValues);
  });

  it('should cancel the debounce on unmount', () => {
    const values = [1, 2, 3];
    const delay = 500;
    let clearTimeoutCalled = false;

    jest.spyOn(global, 'clearTimeout').mockImplementation(() => {
      clearTimeoutCalled = true;
    });

    const {unmount} = renderHook(() => useDebounce(values, delay));

    unmount();

    expect(clearTimeoutCalled).toBe(true);

    jest.restoreAllMocks();
  });
});
