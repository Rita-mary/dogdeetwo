import { useState } from "react";

const Contact = () => {
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name)
    console.log(email)
    setEmail("")
    setName("")
  };
  // const handleNameChange=(e)=>{
  //   setName(e.target.value)
  // }
  // const handleEmailChange=(e)=>{
  //   setEmail(e.target.value)
  // }
  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-2xl mx-auto p-10 gap-5 bg-white"
      >
        <input value={name} onChange={(e) =>setName(e.target.value)} type="text" placeholder="Enter your name" className="border" />
        <input value={email} onChange={(e) =>setEmail(e.target.value)} type="email" placeholder="Enter your email" className="border" />

        <button  className="bg-green-400">
          Contact us
        </button>
      </form>
    </section>
  );
};

export default Contact;
