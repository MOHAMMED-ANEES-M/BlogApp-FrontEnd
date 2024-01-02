import React from 'react'
// import { useNavigate } from 'react-router-dom'

const About = () => {

  // const navigate = useNavigate()

  // let token = localStorage.getItem('token')

  // useEffect(()=>{
  //   if (!token) {
  //     navigate('/signin')
  //   }
  // })

  return (
    <div>
       <div class="container">
        <h1 className='text-center mb-5'>About Us</h1>
        <p className='mb-5'>Welcome to <strong>Memoir!</strong></p>

        <section className='mb-5'>
            <h2>Who We Are</h2>
            <p>
                At <strong>Memoir</strong>, we are passionate storytellers, creatives, and enthusiasts who believe in the power of words.
                Our mission is to bring you engaging and thought-provoking content that informs, inspires, and entertains.
            </p>
        </section>

        <section className='mb-5'>
            <h2>Our Vision</h2>
            <p>
                We envision a platform where diverse voices come together to share stories, ideas, and experiences.
                Through our blog, we aim to create a community that fosters connection, understanding, and a love for storytelling.
            </p>
        </section>

        <section className='mb-5'>
            <h2>What We Offer</h2>
            <ul>
                <li><strong>Inspiring Stories:</strong> Discover stories that resonate with your experiences, challenge your perspectives, and leave you inspired.</li>
                <li><strong>In-depth Articles:</strong> Dive into thought-provoking articles that explore a wide range of topics, from technology and lifestyle to culture and personal development.</li>
                <li><strong>Creative Expressions:</strong> Immerse yourself in the creativity of our contributors through poetry, short stories, and artistic expressions.</li>
            </ul>
        </section>

        <section className='mb-5'>
            <h2>Join Our Community</h2>
            <p>
                We invite you to be a part of our growing community. Connect with us on social media, share your thoughts in the comments, and contribute your own stories.
                Together, let's create a space where every voice is heard and every story matters.
            </p>
        </section>

        <p>Thank you for being a part of the <strong>Memoir</strong> journey!</p>
    </div>

    </div>
  )
}

export default About
