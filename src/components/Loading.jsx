import { Bars } from  'react-loader-spinner'
export const Loading = () => {
  return (
    <div className='flex items-center justify-center h-96'>
        <Bars
  height="150"
  width="150"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>
  );
};

export default Loading