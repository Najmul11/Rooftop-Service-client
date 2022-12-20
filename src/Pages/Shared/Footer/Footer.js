import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='bg-gray-50 dark:bg-teal-500'>
            <footer className="footer p-20   container mx-auto justify-items-center">
            <div className='font-medium'>
                <span className="footer-title">Services</span> 
                <a href='http://localhost:3000/' className="link link-hover">Coating</a> 
                <a href='http://localhost:3000/' className="link link-hover">Replacing</a> 
                <a href='http://localhost:3000/' className="link link-hover">Inspecting</a> 
                <a href='http://localhost:3000/' className="link link-hover">Repairing</a>
            </div> 
            <div className='font-medium'>
                <span className="footer-title">Explore</span> 
                <a href='#home' className="link link-hover">About</a> 
                <a href='#experience' className="link link-hover">Experiences</a> 
                <a href='#faq' className="link link-hover">Faq</a> 
                <a href='#services' className="link link-hover">Services</a>
            </div> 
            <div className='font-medium'>
                <span className="footer-title">Social</span> 
                <div className="grid grid-flow-col gap-4 text-2xl">
                    <a href="https://twitter.com/" target={'_blank'} rel="noreferrer"><FaTwitter/></a>
                    <a href="https://youtube.com/" target={'_blank'} rel="noreferrer"><FaYoutube/></a>
                    <a href="https://facebook.com/" target={'_blank'} rel="noreferrer"><FaFacebook/></a>
                </div>
                <div className="relative mt-3">
                    <input type="text" placeholder="xyz@site.com" className="input border-inherit w-full pr-16" /> 
                    <button className="btn absolute top-0 right-0 rounded-l-none  text-black border-0  bg-teal-200 hover:bg-teal-400 hover:border-0">Subscribe</button>
                </div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;