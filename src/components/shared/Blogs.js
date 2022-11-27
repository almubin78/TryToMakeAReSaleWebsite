import React from 'react';
import useDynamicTitle from './useDynamicTitle';

const Blogs = () => {
    useDynamicTitle('Blogs')
    const blogs = [
        {
            id: 1,
            question: 'What are the different ways to manage a state in a React application?',
            answer: 'There are some Ways to manage a state in a React Application: 1. by use URL, 2.by use "Web Storage", 3.Local State,4.Lifted State,5.Derived State,6.Global State '
        },
        {
            id: 2,
            question: 'How does prototypical inheritance work?',
            answer: '“Prototypal Inheritance”, meaning that objects and methods can be shared, extended, and copied.Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.'
        },
        {
            id: 3,
            question: 'What is a unit test? Why should we write unit tests?',
            answer: 'A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.It decrease defects and expose them early in the development lifecycle,increase code readability,enable code reuse; andimprove deployment velocity.'
        },
        {
            id: 4,
            question: 'React vs. Angular vs. Vue?',
            answer: 'Angular is developed by Google, React by Facebook, Vue is a community-driven open-source project.Three component-focused frameworks, where Angular has a lot of built-in features, Vue has some built-in features, React is very minimalists.Vue is easiest to learn, React and Angular are on the same level and a bit more difficult than Vue.All three frameworks are popular but React is a bit more popular than Angular, which in turn is getting used more than Vue.'
        }
    ]
    return (
        <div>
            {
                blogs.map((blog ,i)=>
                    <div key={blog.id} className='border '>
                        <h2 className='text-primary'>{i+1}.{blog.question}</h2>
                        <h4 className='text-warning'>{blog.answer}</h4>
                    </div>

                )
            }
        </div>
    );
};

export default Blogs;