const organizationData = [
  {
    id: 1,
    imgSrc: '/Images/Child3.jpg',
    title: 'Ngara Children\'s Home',
    description: 'Ngara Children\'s Home is dedicated to providing a safe and nurturing environment for underprivileged children. Our mission is to offer essential food, medical care, and educational support to children who have faced extreme hardship. By contributing to our cause, you help ensure that these children receive the basic necessities they deserve and the hope for a brighter future. Join us in our journey to transform lives and build a more compassionate world. Every donation, big or small, plays a crucial role in giving these children a chance to thrive.',
    dateStarted: 'August 2021',
    location: 'Canada',
    paybill: '234567',
    priorityDonation: 'Clothes',
    founders: [
      { name: 'Dhruvin', imgSrc: '/Images/dhruvin.jpg' },
      { name: 'John Doe', imgSrc: '/Images/dhruvin.jpg' },
      { name: 'Jane Smith', imgSrc: '/Images/dhruvin.jpg' },
    ],
  },
  {
    id: 2,
    imgSrc: '/Images/Orphans.jpeg',
    title: 'Educate The Needy Children',
    description: 'At Educate The Needy Children, we are dedicated to unlocking the potential of children through the power of education. We strive to provide underprivileged children with the books, school supplies, and educational opportunities they need to achieve their dreams. Our programs focus on creating a supportive learning environment where children can excel academically and build a foundation for a successful future. Your donation helps us to purchase essential learning materials, support teachers, and develop educational programs that will impact the lives of these children for years to come. Be a part of this transformative journey and help us pave the way for a brighter tomorrow.',
    dateStarted: 'June 2019',
    location: 'Kenya',
    paybill: '123456',
    priorityDonation: 'Books',
    founders: [
      { name: 'Alice Johnson', imgSrc: '/Images/dhruvin.jpg' },
      { name: 'Robert Brown', imgSrc: '/Images/dhruvin.jpg' },
    ],
  },
  {
    id: 3,
    imgSrc: '/Images/RemoteSchool.jpeg',
    title: 'Invest to Save The Society',
    description: 'Invest to Save The Society is committed to building a better world through strategic investments in community development and humanitarian efforts. Our focus is on providing essential resources such as food, shelter, and educational opportunities to underserved populations. We believe that with your support, we can address critical needs and create sustainable solutions for long-term positive change. Your contributions help fund various initiatives, from food drives to educational programs, aimed at uplifting communities and fostering a culture of kindness and generosity. Join us in our mission to make a significant impact and shape a brighter future for those in need.',
    dateStarted: 'March 2020',
    location: 'USA',
    paybill: '987654',
    priorityDonation: 'Food',
    founders: [
      { name: 'Michael Scott', imgSrc: '/Images/dhruvin.jpg' },
      { name: 'Pam Beesly', imgSrc: '/Images/dhruvin.jpg' },
      { name: 'Jim Halpert', imgSrc: '/Images/dhruvin.jpg' },
    ],
  },
  {
    id: 4,
    imgSrc: '/Images/Child4.jpg',
    title: 'Ngong Children\'s Home',
    description: 'Ngong Children\'s Home is a haven for orphaned and abandoned children. Our mission is to provide a safe, loving environment where children can live with dignity and hope for the future. We offer a range of services including nutritious meals, medical care, and educational support. By donating to Ngong Children\'s Home, you contribute to creating a stable and supportive community where children can grow, learn, and succeed. Your generosity helps us to meet their daily needs and offers them opportunities for a better life. Support us in our efforts to make a meaningful difference in their lives.',
    dateStarted: 'April 2018',
    location: 'Kenya',
    paybill: '345678',
    priorityDonation: 'Food',
    founders: [
      { name: 'Emily Davis', imgSrc: '/Images/dhruvin.jpg' },
      { name: 'James Wilson', imgSrc: '/Images/dhruvin.jpg' },
    ],
  },
  {
    id: 5,
    imgSrc: '/Images/village.jpg',
    title: 'Vivegonot Village',
    description: 'Vivegonot Village is a community-focused initiative aimed at alleviating the extreme poverty faced by children in remote villages. Our programs address critical needs such as clothing, food, and education for children who are struggling to survive. We work directly with local communities to provide support and develop sustainable solutions that can make a lasting impact. Your donations help us to distribute clothing, provide food supplies, and fund educational activities that empower children and families. Join us in our mission to bring hope and relief to those living in poverty.',
    dateStarted: 'July 2020',
    location: 'India',
    paybill: '456789',
    priorityDonation: 'Clothes',
    founders: [
      { name: 'Raj Patel', imgSrc: '/Images/dhruvin.jpg' },
      { name: 'Anita Singh', imgSrc: '/Images/dhruvin.jpg' },
    ],
  },
  {
    id: 6,
    imgSrc: '/Images/remoteschool.jpg',
    title: 'Loginot School',
    description: 'Loginot School is dedicated to providing basic education to children in a remote village with very limited resources. Our goal is to offer quality education and a supportive learning environment for children who otherwise have no access to schooling. We focus on offering fundamental educational services and fostering a love for learning among our students. Your donations help us improve school facilities, purchase educational materials, and support teachers. Be a part of our efforts to bring education to those who need it most and help us build a foundation for their future success.',
    dateStarted: 'October 2017',
    location: 'Tanzania',
    paybill: '567890',
    priorityDonation: 'Books',
    founders: [
      { name: 'Sarah Johnson', imgSrc: '/Images/dhruvin.jpg' },
      { name: 'David White', imgSrc: '/Images/dhruvin.jpg' },
    ],
  },
  {
    id: 7,
    imgSrc: '/Images/OldageHomes.jpg',
    title: 'Sahaga Old Age Home',
    description: 'Sahaga Old Age Home is a compassionate sanctuary for elderly citizens who are in need of care and support. Our mission is to provide a safe, respectful, and nurturing environment for senior citizens, offering them a place where they can feel valued and cared for. We provide essential services such as medical care, daily meals, and emotional support to ensure that the elderly can live their later years with dignity and comfort. Your donations help us to maintain the home, provide for our residents, and support various programs that enhance their quality of life. Join us in our commitment to caring for the elderly and making their lives better.',
    dateStarted: 'January 2016',
    location: 'South Africa',
    paybill: '678901',
    priorityDonation: 'Medicine',
    founders: [
      { name: 'George Harris', imgSrc: '/Images/dhruvin.jpg' },
      { name: 'Helen Clark', imgSrc: '/Images/dhruvin.jpg' },
    ],
  },
  {
    id: 8,
    imgSrc: '/Images/Thirsty2.jpg',
    title: 'Turkana Food Drive NGO',
    description: 'Turkana Food Drive NGO is on a mission to provide life-saving food and clean water to communities in Turkana, where millions suffer from the daily struggle of finding clean water and sufficient food. Our initiatives focus on distributing essential food supplies and improving access to clean water for the most vulnerable populations. By donating to our cause, you help us reach those in desperate need and make a tangible difference in their lives. Your support allows us to expand our reach, provide necessary resources, and ensure that every donation directly benefits those who need it most.',
    dateStarted: 'May 2021',
    location: 'Kenya',
    paybill: '789012',
    priorityDonation: 'Water',
    founders: [
      { name: 'Grace Kim', imgSrc: '/Images/dhruvin.jpg' },
      { name: 'Ethan Lee', imgSrc: '/Images/dhruvin.jpg' },
    ],
  },
  {
    id: 9,
    imgSrc: '/Images/Hunger.jpg',
    title: 'Children’s Hunger Fund',
    description: 'Children’s Hunger Fund is dedicated to combating hunger and malnutrition among children and families facing extreme food insecurity. Our mission is to provide food assistance, nutritional support, and emergency relief to those who are suffering from hunger. Through your generous donations, we are able to distribute food packages, support feeding programs, and offer assistance to those in urgent need. Join us in our fight against hunger and help us ensure that no child or family goes to bed hungry. Your contribution is a powerful way to make a significant impact on the lives of those in need.',
    dateStarted: 'September 2015',
    location: 'Ethiopia',
    paybill: '890123',
    priorityDonation: 'Food',
    founders: [
      { name: 'Anna Brown', imgSrc: '/Images/dhruvin.jpg' },
      { name: 'Mark Thompson', imgSrc: '/Images/dhruvin.jpg' },
    ],
  },
];

export default organizationData;
