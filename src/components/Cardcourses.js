// import React, { useState } from 'react';
// import { Carousel, Button, Card } from 'antd';

// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

// const Cardcourses = () => {
//   const [dotPosition, setDotPosition] = useState('top');
//   const [selectedCategory, setSelectedCategory] = useState('all');

//   const handlePositionChange = ({ target: { value } }) => {
//     setDotPosition(value);
//   };

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   const filterContent = () => {
//     // You can customize this logic based on your data or requirements
//     switch (selectedCategory) {
//       case 'all':
//         return [
//           <Card key={1} title="Card 1" style={{ width: 300 }}>
//             <p>Content for Card 1</p>
//           </Card>,
//           <Card key={2} title="Card 2" style={{ width: 300 }}>
//             <p>Content for Card 2</p>
//           </Card>,
//           <Card key={3} title="Card 3" style={{ width: 300 }}>
//             <p>Content for Card 3</p>
//           </Card>,
//         ];
//       case 'technology':
//         return [
//           <Card key={1} title="Technology Card 1" style={{ width: 300 }}>
//             <p>Content for Technology Card 1</p>
//           </Card>,
//           <Card key={2} title="Technology Card 2" style={{ width: 300 }}>
//             <p>Content for Technology Card 2</p>
//           </Card>,
//         ];
//       case 'skills':
//         return [
//           <Card key={1} title="Skills Card 1" style={{ width: 300 }}>
//             <p>Content for Skills Card 1</p>
//           </Card>,
//           <Card key={2} title="Skills Card 2" style={{ width: 300 }}>
//             <p>Content for Skills Card 2</p>
//           </Card>,
//         ];
//       default:
//         return [];
//     }
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <div className="mb-4">
//         <Button
//           type={selectedCategory === 'all' ? 'primary' : 'default'}
//           onClick={() => handleCategoryChange('all')}
//         >
//           All Categories
//         </Button>
//         <Button
//           type={selectedCategory === 'technology' ? 'primary' : 'default'}
//           onClick={() => handleCategoryChange('technology')}
//         >
//           Technology
//         </Button>
//         <Button
//           type={selectedCategory === 'skills' ? 'primary' : 'default'}
//           onClick={() => handleCategoryChange('skills')}
//         >
//           Skills
//         </Button>
//       </div>

//       <Carousel autoplay>
//         {React.Children.map(filterContent(), (child) => (
//           <div>{child}</div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Cardcourses;
import React, { useState } from 'react';
import { Carousel, Button, Card } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Cardcourses = () => {
  const [dotPosition, setDotPosition] = useState('top');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filterContent = () => {
    // You can customize this logic based on your data or requirements
    switch (selectedCategory) {
      case 'all':
        return [
          <Card key={1} title="Card 1" style={{ width: 300 }}>
            <p>Content for Card 1</p>
          </Card>,
          <Card key={2} title="Card 2" style={{ width: 300 }}>
            <p>Content for Card 2</p>
          </Card>,
          <Card key={3} title="Card 3" style={{ width: 300 }}>
            <p>Content for Card 3</p>
          </Card>,
        ];
      case 'technology':
        return [
          <Card key={1} title="Technology Card 1" style={{ width: 300 }}>
            <p>Content for Technology Card 1</p>
          </Card>,
          <Card key={2} title="Technology Card 2" style={{ width: 300 }}>
            <p>Content for Technology Card 2</p>
          </Card>,
        ];
      case 'skills':
        return [
          <Card key={1} title="Skills Card 1" style={{ width: 300 }}>
            <p>Content for Skills Card 1</p>
          </Card>,
          <Card key={2} title="Skills Card 2" style={{ width: 300 }}>
            <p>Content for Skills Card 2</p>
          </Card>,
        ];
      default:
        return [];
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4">
        <Button
          type={selectedCategory === 'all' ? 'primary' : 'default'}
          onClick={() => handleCategoryChange('all')}
        >
          All Categories
        </Button>
        <Button
          type={selectedCategory === 'technology' ? 'primary' : 'default'}
          onClick={() => handleCategoryChange('technology')}
        >
          Technology
        </Button>
        <Button
          type={selectedCategory === 'skills' ? 'primary' : 'default'}
          onClick={() => handleCategoryChange('skills')}
        >
          Skills
        </Button>
      </div>

      <Carousel autoplay>
        {React.Children.map(filterContent(), (child) => (
          <div>{child}</div>
        ))}
      </Carousel>
    </div>
  );
};

export default Cardcourses;

