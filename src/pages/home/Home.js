import { PageTitle } from 'components';

const Home = () => {
  return (
    <div className="flex w-full flex-col">
      <PageTitle
        title="Welcome"
        img="https://media.rawg.io/media/games/174/1743b3dd185bda4a7be349347d4064df.jpg"
      />

      <div className="w-full">
        <p>
          When I open the site, a horizontal scrollbar appears. I hid it by ::-webkit-scrollbar but
          it isnt a good solution because not all browsers support it. Do you know why this problem
          happens? When I open the site, a horizontal scrollbar appears. I hid it by
          ::-webkit-scrollbar but it isnt a good solution because not all browsers support it. Do
          you know why this problem happens?
        </p>
      </div>
      <div className="w-full">
        <p>
          When I open the site, a horizontal scrollbar appears. I hid it by ::-webkit-scrollbar but
          it isnt a good solution because not all browsers support it. Do you know why this problem
          happens? When I open the site, a horizontal scrollbar appears. I hid it by
          ::-webkit-scrollbar but it isnt a good solution because not all browsers support it. Do
          you know why this problem happens?
        </p>
      </div>
      <div className="w-full">
        <p>
          When I open the site, a horizontal scrollbar appears. I hid it by ::-webkit-scrollbar but
          it isnt a good solution because not all browsers support it. Do you know why this problem
          happens? When I open the site, a horizontal scrollbar appears. I hid it by
          ::-webkit-scrollbar but it isnt a good solution because not all browsers support it. Do
          you know why this problem happens?
        </p>
      </div>
    </div>
  );
};

export default Home;
