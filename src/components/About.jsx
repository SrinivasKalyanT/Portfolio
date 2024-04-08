import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Srinivas Kalyan, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate in developing, designing Machine Learning algorithms which can be used on various tasks on large datasets.During my studies, I gained a strong foundation in important subjects such as data structures, 
                database management systems (DBMS), and object-oriented programming (OOP). I'm always eager to expand my knowledge and stay up-to-date 
                with the latest advancements in technology.In addition to my academic achievements, I have taken courses on Machine Learning, Deep Learning and Natural Language Processing through Coursera and Udemy. 
                These courses have allowed me to enhance my skills and deepen my expertise in these technologies.
              </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
