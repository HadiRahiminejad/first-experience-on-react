import React, {Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/layout/header/topMenu.css';
import reportWebVitals from './reportWebVitals';
import  Head  from './components/layout/header/topMenu.js';
import SpecialList from './components/specialMovis/specialList';
import NewList from './components/newMovies/newList';
import NewSeries from './components/newSeries/newSeries';
import Banner from './components/banner/banner';
const allDataMovies =[
 
        {
            title: 'تازه سرباز',
            poster: 'https://static.namava.ir/Content/Upload/Images/5df1aaf4-955a-41ff-ac43-bfbec7b246aa.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294',
            type: 'سریال',
            product_year: '2022',
            user_rate: '82%',
            imdb: '7.5',
            subtitle: 'زیرنویس',
        },
        {
            title: 'بیست و پنج بیست ویک',
            poster: 'https://static.namava.ir/Content/Upload/Images/a72c4c32-7067-40b2-b63d-6de918b917d7.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294',
            type: 'سریال',
            product_year: '2022',
            user_rate: '94%',
            imdb: '8.7',
            subtitle: 'دوبله',
        },
        {
            title: 'گارسیا',
            poster: 'https://static.namava.ir/Content/Upload/Images/6e5c1372-b735-4a91-b32e-2aadbb5b7878.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294',
            type: 'سریال',
            product_year: '2022',
            user_rate: '83%',
            imdb: '5.9',
            subtitle: 'دوبله',
        },
        {
            title: '1923',
            poster: 'https://static.namava.ir/Content/Upload/Images/f062a4ed-4dd1-416d-8222-3cb9d4842650.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294',
            type: 'سریال',
            product_year: '2022',
            user_rate: '87%',
            imdb: '8.4',
            subtitle: 'زیرنویس',
        },
        {
            title: 'ساخته شده در آبیس',
            poster: 'https://static.namava.ir/Content/Upload/Images/67704b12-34c9-4eac-b847-2e60981ff58c.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294',
            type: 'سریال',
            product_year: '2017',
            user_rate: '90%',
            imdb: '8.4',
            subtitle: 'دوبله',
        },
        {
            title: 'شبکه مخفی زنان',
            poster: 'https://static.namava.ir/Content/Upload/Images/597ee6af-55eb-4a52-9f61-63885da5e15f.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294',
            type: 'سریال',
            product_year: '1401',
            user_rate: '88%',
            imdb: '',
            subtitle: '',
        },
        {
            title: 'روزی روزگاری در مریخ',
            poster: 'https://static.namava.ir/Content/Upload/Images/71360ded-609c-47bc-af91-b1ece23453ca.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294',
            type: 'سریال',
            product_year: '1401',
            user_rate: '87%',
            imdb: '',
            subtitle: '',
        },
        {
            title: 'خون بها',
            poster: 'https://static.namava.ir/Content/Upload/Images/c717e68e-d328-4140-b490-6e00ad9bd79e.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294',
            type: 'سریال',
            product_year: '2022',
            user_rate: '88%',
            imdb: '7.6',
            subtitle: 'دوبله',
        },
    ];


// const instance = axios.create({
//     baseURL: 'https://www.aparat.com//etc/api/',
//     timeout: 1000,
//     accept: "application/json"
    

//   });
// async function handleClick() {
//    const response = await instance.get("mostviewedvideos");
//    console.log(response)
// };

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Fragment>
       <Head />
       <Banner className="slider" title="slider" onChange={() => { return () => {}}} />
       <div className='content-wrapper'>
       <SpecialList  className="special"  data={allDataMovies} title="ویژه" />
      <NewList className="new-list" data={allDataMovies} title= "تازه های نماوا" />
      <NewSeries className="new-series" data={allDataMovies} title="سریال های به روز شده" />
      </div>
    </Fragment>
    
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
