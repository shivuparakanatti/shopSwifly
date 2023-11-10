import React from 'react'
import { Avatar,Card } from "keep-react";
import { GithubLogo, LinkedinLogo, TwitterLogo,InstagramLogo } from "phosphor-react";
import me from '../assets/me.jpeg'


const NameCard = () => {
  return (
    <div>
        <Card className="md:max-w-lg max-w-xs p-6 flex  items-center justify-center mt-4 ml-10   ">
        <Card.Description>
       I am Shivakumar parakanatti, I am a software Engineer based in Bengaluru, India. I'm passionate about accessibility, performance and elegant design and things that usually make life easier for the users. I Currently work for TCS, Bengaluru.
        </Card.Description>
        <Card.Container className="flex items-center">
          <Avatar
            size="md"
            shape="circle"
            img={me}
          />
          <Card.Container className="ml-3 my-2">
            <Card.Title className="md:text-base text-sm font-semibold text-slate-800">
              Shivakumar Parakanatti
            </Card.Title>
            <Card.Title className="text-xs md:font-medium  font-normal text-slate-400">
              Front-End Developer
            </Card.Title>
            
          </Card.Container>
          
        </Card.Container>
        <div className='flex '>

        <Card.Link
            className="flex items-center justify-center py-1 px-3"
            icon={<LinkedinLogo size={24} color="#0072b1" weight="fill" />}
            href='https://www.linkedin.com/in/shivakumar-parakanatti-90b264230'
           
          />
          
          <Card.Link
            className="flex items-center justify-center py-1 px-3"
            icon={<InstagramLogo size={24} color="#0C63D4" weight="fill" />}
            href="https://www.instagram.com/shiv_parakanatti/"
          />
          <Card.Link
            className="flex items-center justify-center py-1 px-3"
            icon={<GithubLogo size={24} color="#0C8BD9" weight="fill" />}
            href="https://github.com/shivuparakanatti"
          />
        </div>
        
      </Card>

    </div>
  )
}

export default NameCard