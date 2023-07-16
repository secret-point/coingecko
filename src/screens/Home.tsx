import {GlobalStyles} from '~Root/config';
import {CryptoTableList} from '~Root/components/CryptoTableList';
import {SafeAreaLayout} from '~Root/Layout/SafeAreaLayout';

const Home = () => {
  return (
    <SafeAreaLayout style={GlobalStyles.container}>
      <CryptoTableList />
    </SafeAreaLayout>
  );
};

export default Home;
