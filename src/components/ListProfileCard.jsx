import React from 'react'
import ProfileCard from './ProfileCard'
import './ListProfileCard.css'

function ListProfileCard() {
  return (
    <>
    <div className='container'>
    <div><ProfileCard
        title="Card 1"
        content="This is the content of Card 1. Lorem ipsum dolor sit amet."
        imageUrl="https://images.unsplash.com/photo-1532171875345-9712d9d4f65a?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        skill="skill"

        /></div>
        <div><ProfileCard
        title="Card 2"
        content="This is the content of Card 2. Lorem ipsum dolor sit amet."
        imageUrl="https://images.unsplash.com/photo-1532171875345-9712d9d4f65a?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        skill="skill"

      /> </div>
       <div><ProfileCard
        title="Card 4"
        content="This is the content of Card 2. Lorem ipsum dolor sit amet."
        imageUrl="https://images.unsplash.com/photo-1532171875345-9712d9d4f65a?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        skill="skill"

      /> </div>
       <div><ProfileCard
        title="Card 5"
        content="This is the content of Card 2. Lorem ipsum dolor sit amet."
        imageUrl="https://images.unsplash.com/photo-1532171875345-9712d9d4f65a?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        skill="skill"

      /> </div>
    </div>
      
        
    </>
  )
}

export default ListProfileCard