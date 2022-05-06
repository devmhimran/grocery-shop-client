import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog__main container'>
            <h1 className='text-center'>Blog</h1>
            <div className="question__ans py-3">
                <div className="card">
                    <div className="card-body">
                        <h4>Difference between javascript and nodejs</h4>
                        <p className='mt-4'>জাভাস্ক্রিপ্ট একটি স্ক্রিপ্টিং লেংগুয়েজ,  যা কিনা ওয়েবসাইটে স্ক্রিপ্ট লিখতে সাহায্য করে। নোড যে এস হচ্ছে রানটাইম ইনভিরনমেন্ট তৈরী করে। জাভাস্ক্রিপ্ট শুধুমাত্র ব্রাউজারে চলতে পারে। জাভাস্ক্রিপ্ট ব্রাউজারের বাইরে চলতে গেলে নোড যে এস এর সাহায্য নিতে হয়। জাভাস্ক্রিপ্ট ক্লাইন সাইটে কাজ করা হয়। ওয়েবসাইটের বিভিন্ন ইন্ট্রেকশনের ক্ষেত্রে জাভাস্ক্রিপ্ট  ব্যবহার করস হয়। জাভাস্ক্রিপ্ট-এ এইচটি এম এল ব্যবহার করা যায় কিন্তু নোড যে এস এ এইচ টি এম এল ব্যবহার করা যায় না।</p>
                    </div>
                </div>
            </div>
            <div className="question__ans py-3">
                <div className="card">
                    <div className="card-body">
                        <h4>When should you use nodejs and when should you use mongodb</h4>
                        <p className='mt-4'>SQL  হচ্ছে রিলেশনাল ডাটাবেইজ। আর  NO SQL হচ্ছে রিলেশনাল ছাড়া ডাটাবেইজ। SQL ডাটাবেইজ স্ট্রাকচারাল  কোয়েরি ব্যবহার করে পেপারফ্রি ডিফাইন স্কেমা আছে। NO SQL ডাটাবেজ অন স্ট্রাকচার ডাটা এর জন্য ডায়নামিক স্কেমা  ব্যবহার করে। SQL ডাটাবেজ টেবিল আকারে ডেটা স্টোর করে NO SQL ডাটাবেজ ডকুমেন্ট আকারে ডেটা স্টোর করে এবং কি ভ্যালু আকারেও করে। SQL ডাটাবেজ বিভিন্ন রোড ট্রানজেকশনের ব্যবহার হয়।  NO SQL ডাটাবেজ আন স্ট্রাকচার ডাটার জন্য ভালো যেমন ডকুমেন্ট অথবা JSON.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;