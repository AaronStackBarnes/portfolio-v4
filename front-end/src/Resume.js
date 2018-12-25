import React from "react";

const Resume = () => {
  return <>
  <p>AARON STACK</p>
  <p>A full-stack software engineer who designs for the end user</p>
  <p>Brooklyn, NY</p>
  <p>(917) 748-2350</p>
  <p>www.aarongstack.com</p>
  <p>aarongstack@gmail.com</p>
  <p>linkedin.com/in/aaron-stack/</p>
  <p>github.com/AaronStackBarnes</p>
  <br/>
  <br/>
  <p>RELEVANT EXPERIENCE</p>
  <br/>
  <p>AREA 23, NY — Developer</p>
  <p>MARCH 2018 - PRESENT</p>
  <p>Oversees multiple full stack development initiatives to drive the technological innovation for a global marketing agency.  Partners with the marketing team to develop and maintain websites for large pharmaceutical clients, including Eagle-Bendamustine, NTM Facts, and About NTM, and includes launching the agency’s first ReactJS, React Native and Polymer websites. Selected to oversee Special Projects, leading the development of prototypes for: a system of sharing and storing medical records on the Ethereum Blockchain, a web-based 360 video training system for doctors, and integrations of the Web Speech API and PHP.</p>
  <br/>
  <p>Project Highlight: Created the Get Up Alarm Clock so that cancer patients could wake up to words of encouragement from friends and loved ones.</p>
  <p>User logs into administrative portal built in ReactJS to set alarm times and other configuration settings</p>
  <p>The site uses the Web Bluetooth API to connect to the Alarm Clock, powered by a Raspberry Pi3 to receive the data via a custom-built GATT Server/Bluetooth, and Node server</p>
  <p>Once the alarm is detected, the Pi using GPIO pins powers up an attached projector and makes multiple calls to the Twitter API to fetch the user’s private messages and other details</p>
  <p>Data is displayed on the projector, styled in the appearance of public tweets</p>
  <br/>
  <p>DOG PARKER, NY — Junior Full Stack Developer</p>
  <p>SEPTEMBER 2017 - MARCH 2018</p>
  <p>Developed key features and provided overall maintenance of website, mobile application, and physical infrastructure of the Dog Parker system.  Accomplishments include: leading complete redesign of administrator portal, developing various sign up flows specific to user’s platform, and building remote monitoring and system configuration for modems and Raspberry Pis.</p>
  <br/>
  <p>Project Highlight: Developed capability to start remote house sessions:</p>
  <p>Administrator uses custom directive and data service built in AngularJS to initiate remote start, hitting routes built in Node/Express (auth using JWT and testing with Mocha) and logging events in MongoDB and Mongoose</p>
  <p>Server initiates “handshake” to confirm connectivity with the individual houses using Microsoft’s IoT hub service</p>
  <p>Upon success, starts new session flow in the house-level Debian environment, using javascript and bash commands to coordinate streaming video, UV scanner, speaker, microphone, lights, and air conditioning</p>
  <p>Uses Firebase to provide real-time status updates on the Admin Portal and alert users of remote activity via custom screens displayed on the mobile App (built with AngularJS and GoNative.IO wrapper)</p>
  <br/>
  <p>GABRIEL FILMS (PROJECT Y), NY — Full Stack Developer </p>
  <p>APRIL 2016 - PRESENT</p>
  <p>Develop and maintain React Native application for a global not-for-profit men’s health initiative, allowing users to ask questions and seek information from professionals on sensitive health topics from their phone.  Additionally built Wordpress templates, implemented chat and live stream functionality for 2017 World Vasectomy Day event, and provide general website maintenance.</p>
  <br/>
  <p>SQN SECURITIES, NY — Business Development </p>
  <p>MAY 2012 - JUNE 2017</p>
  <p>Improved overall management of sales leads and contacts by managing the implementation of Salesforce and later integrating Salesforce with a custom-built Ruby and SQL backup system to dynamically assign Salesforce IDs.  Reduced overall shipping costs by 25% by creating an inventory management and order request system.  Decreased capital deployment time by developing a pipeline forecasting system that analyzed past investments and sales team activity to predict future investments. Increased email open rates by 11% by monitoring trends in sales team email activity. Improved utilization of external sales staff through a contact mapping system.</p>
  <br/>
  <br/>
  <p>TECHNOLOGIES</p>
  <p>Angular 2, AngularJS, Axios, Bcrypt, Belmont, Debian GNU/Linux, Django, Firebase, GoNative.io, Jasmine, Javascript, Jest, JWT, MATLAB, Microsoft Azure, IOT Hub, Mocha, MongoDB, Mongoose, Ng-admin, Node, Numpy, PHP, PM2, Polymer, Python, React Native, ReactJS, ReactVR, Ruby, Ruby on Rails, TensorFlow, TensorFlowJS</p>
  <br/>
  <p>KEY PROJECTS</p>
  <p>Migraine Friendly Internet, A Chrome Browser plug in designed to make the internet better for sufferers of migraine.  Users have the option to change the coloration and spacing of all websites as well as blocking all advertisements and media autoplay.</p>
  <p>Social Metadata Management System (PHP), a simple system built to make social media sites display correct  information for shared content. It is prodmomentianly used to send OG information for videos and jump links.</p>
  <p>The City I Love, a site built with React Native  and accompanying guide written and developed for beginners learning VR.</p>
  <p>Game of React Redux, a tutorial and demo accompaniment to  a talk I gave teaching a React Redux design pattern (originated by the Dan Abramov To Do MVC example).</p>
  <br/>
  <p>EDUCATION</p>
  <p>Full Stack Developer Intensive - Dev Bootcamp, NY</p>
  <p>MBA, HR Information Systems - University at Albany, NY</p>
  <p>BA, Economics - University at Albany, NY</p>
  <p>BA, Chinese - University at Albany, NY</p>
  </>
}

export default Resume
