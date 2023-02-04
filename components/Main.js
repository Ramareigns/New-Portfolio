import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Main = () => {
  return (
    <div id="Main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4">
            Hi, I'm <span className="text-purple-700">Ramith Wijesinghe</span>
          </h1>
          <h2 className="py-4">Undergradute Student in Information Science</h2>
          <p className="py-4 font-bold text-grey-500 max-w-[70%] m-auto">
            I am an undergraduate student, currently pursuing a degree in
            Information Science and I am interested in the fields of Data
            Science, Data Analyst, Software Development, Web Development,
            Solution Specialist and Game Development. I am aspiring to have
            great achievements within my career and work hard to attain the
            goals I have set for myself. Therefore, I am looking for
            Internships/job opportunities relating to the field of Information
            and Computer science in order to enhance my skills and gain
            experience.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/ramith-wijesinghe-842bab180/">
              <div className="rounded-full shadow-lg bg-purple-300  shadow-black p-6 cursor-pointer hover:scale-110 hover:bg-white ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/Ramareigns">
              <div className="rounded-full shadow-lg bg-purple-300 shadow-black p-6 cursor-pointer hover:scale-110 hover:bg-white ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a href="mailto:rwijesin@terpmail.umd.edu">
              <div className="rounded-full shadow-lg bg-purple-300 shadow-black p-6 cursor-pointer hover:scale-110 hover:bg-white ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
            <a href="https://twitter.com/RamithWijesingh">
              <div className="rounded-full shadow-lg bg-purple-300 shadow-black p-6 cursor-pointer hover:scale-110 hover:bg-white ease-in duration-300">
                <FaTwitter />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
