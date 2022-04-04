import React from 'react'

export default function GridProfile({children, imageProfile, imageProfile1, imageProfile2, imageProfile3}) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5">
      <div className="mx-1.5 my-1.5 md:col-span-2  md:row-span-2 bg-cover bg-no-repeat bg-center border-solid border-2 border-backgroundP hover:border-bpink" style={{
        backgroundImage: `url(${imageProfile1})`}}> 
          {children}       
      </div>
      <div className="h-36 mx-1.5 my-1.5 col-span-2 bg-cover bg-no-repeat bg-center border-solid border-2 border-backgroundP hover:border-bpink" style={{
        backgroundImage: `url(${imageProfile2})`}}> 
      </div>
      <div className="h-36 mx-1.5 my-1.5 col-span-2 md:col-span-1 bg-cover bg-no-repeat bg-center border-solid border-2 border-backgroundP hover:border-bpink" style={{
        backgroundImage: `url(${imageProfile3})`}}>        
      </div>
      <div className=" h-36 mx-1.5 my-1.5 bg-cover bg-no-repeat bg-center border-solid border-2 border-backgroundP hover:border-bpink" style={{
        backgroundImage: `url(${imageProfile})`}}>         
      </div>
      <div className="mx-1.5 my-1.5 md:col-span-2  md:row-span-2 bg-cover bg-no-repeat bg-center border-solid border-2 border-backgroundP hover:border-bpink" style={{
        backgroundImage: `url(${imageProfile})`}}>         
      </div>
      <div className="h-36 mx-1.5 my-1.5 col-span-2 md:col-span-1 bg-cover bg-no-repeat bg-center border-solid border-2 border-backgroundP hover:border-bpink" style={{
        backgroundImage: `url(${imageProfile})`}}>          
      </div>
      <div className="h-36 mx-1.5 my-1.5 col-span-2 md:col-span-1 bg-cover bg-no-repeat bg-center border-solid border-2 border-backgroundP hover:border-bpink" style={{
        backgroundImage: `url(${imageProfile})`}}>         
      </div>
      <div className="mx-1.5 my-1.5 md:row-span-2 bg-cover bg-no-repeat bg-center border-solid border-2 border-backgroundP hover:border-bpink" style={{
        backgroundImage: `url(${imageProfile})`}}>       
      </div>
      <div className="mx-1.5 my-1.5 md:row-span-2 bg-cover bg-no-repeat bg-center border-solid border-2 border-backgroundP hover:border-bpink" style={{
        backgroundImage: `url(${imageProfile})`}}>         
      </div>
      <div className="h-36 mx-1.5 my-1.5 col-span-2 md:col-span-1 bg-cover bg-no-repeat bg-center border-solid border-2 border-backgroundP hover:border-bpink" style={{
        backgroundImage: `url(${imageProfile})`}}>        
      </div>
      <div className="h-36 mx-1.5 my-1.5 col-span-2 md:col-span-1 bg-cover bg-no-repeat bg-center border-solid border-2 border-backgroundP hover:border-bpink" style={{
        backgroundImage: `url(${imageProfile})`}}> 
      </div>
      <div className="h-36 mx-1.5 my-1.5 bg-cover bg-no-repeat bg-center border-solid border-2 border-backgroundP hover:border-bpink" style={{
        backgroundImage: `url(${imageProfile})`}}> 
      </div>
      <div className="h-36 mx-1.5 my-1.5 bg-cover bg-no-repeat bg-center border-solid border-2 border-backgroundP hover:border-bpink" style={{
        backgroundImage: `url(${imageProfile})`}}>        
      </div>
      <div className="h-36 mx-1.5 my-1.5 col-span-2 md:col-span-3 bg-cover bg-no-repeat bg-center border-solid border-2 border-backgroundP hover:border-bpink" style={{
        backgroundImage: `url(${imageProfile})`}}>          
      </div>
    </div>
  )
}
