import React from 'react';
import Item from '../Shared/Item/Item';
import qnaImg from '../../assets/blog/qna.png'
import qna from '../../Utilities/qna'
import useTitle from '../../hooks/useTitle'


const Blog = () => {
    useTitle('blog')
    return (
        <div className='dark:bg-gray-800'>
            <div className='container mx-auto py-28 b'>
                <div className="card lg:card-side bg-base-100 rounded-md dark:bg-gray-200"> 
                    <div className='w-1/2 pt-8'>
                        <div className="card-body">
                            <h2 className=" card-title text-5xl font-semibold">Milestone 11 O Finish<br />kore fellam</h2>
                            <h4 className='text-2xl font-medium mt-10'>Matha kapanu questions</h4>
                            <div className='mt-3'>
                                {
                                    qna.map(q=><Item key={q.id} title={q.ques} description={q.ans}></Item>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <figure><img src={qnaImg} className='rounded-r-md' alt="Album"/></figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;