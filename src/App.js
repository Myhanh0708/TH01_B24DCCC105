
// import React, { useState, useEffect } from 'react';

// // BÀI TẬP 1: Ứng dụng đếm số
// const CounterDisplay = ({ count }) => {
//   return <p>Số hiện tại được truyền qua props: {count}</p>;
// };

// const Bai1 = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>Bài 1: Ứng dụng đếm số</h2>
//       <p>Giá trị hiện tại: {count}</p>
//       <div>
//         <button onClick={() => setCount(count - 1)}>-</button>
//         <button onClick={() => setCount(count + 1)}>+</button>
//       </div>
//       <CounterDisplay count={count} />
//     </div>
//   );
// };

// // ---

// // BÀI TẬP 2: Danh sách công việc
// const TodoItem = ({ todo }) => {
//   return <p>{todo}</p>;
// };

// const Bai2 = () => {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleAddTodo = () => {
//     if (inputValue.trim() !== '') {
//       setTodos([...todos, inputValue]);
//       setInputValue('');
//     }
//   };

//   return (
//     <div>
//       <h2>Bài 2: Danh sách công việc</h2>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Nhập công việc"
//       />
//       <button onClick={handleAddTodo}>Thêm</button>
//       <div>
//         {todos.map((todo, index) => (
//           <TodoItem key={index} todo={todo} />
//         ))}
//       </div>
//     </div>
//   );
// };

// // ---

// // BÀI TẬP 3: Ứng dụng đổi màu nền
// const ColorBox = ({ color }) => {
//   const boxStyle = {
//     width: '200px',
//     height: '200px',
//     backgroundColor: color,
//     border: '1px solid black',
//     marginTop: '20px',
//   };
//   return <div style={boxStyle}></div>;
// };

// const Bai3 = () => {
//   const [color, setColor] = useState('white');

//   return (
//     <div>
//       <h2>Bài 3: Ứng dụng đổi màu nền</h2>
//       <div>
//         <button onClick={() => setColor('red')}>red</button>
//         <button onClick={() => setColor('green')}>green</button>
//         <button onClick={() => setColor('blue')}>blue</button>
//         <button onClick={() => setColor('yellow')}>yellow</button>
//       </div>
//       <ColorBox color={color} />
//     </div>
//   );
// };

// // ---

// // BÀI TẬP 4: Thông tin sinh viên
// const StudentCard = ({ name, age, className }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   return (
//     <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
//       <h3>{name}</h3>
//       <button onClick={() => setShowDetails(!showDetails)}>
//         {showDetails ? 'Ẩn chi tiết' : 'Hiện chi tiết'}
//       </button>
//       {showDetails && (
//         <div>
//           <p>Tuổi: {age}</p>
//           <p>Lớp: {className}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// const Bai4 = () => {
//   const studentsData = [
//     { name: 'Đinh Thị Mỹ Hạnh', age: 18, className: '12a2' },
//     { name: 'Nguyễn Ngọc Linh', age: 18, className: '12c1' },
//     { name: 'Nguyễn Minh Phương', age: 19, className: '12a1' },
//   ];

//   return (
//     <div>
//       <h2>Bài 4: Thông tin sinh viên</h2>
//       {studentsData.map((student, index) => (
//         <StudentCard
//           key={index}
//           name={student.name}
//           age={student.age}
//           className={student.className}
//         />
//       ))}
//     </div>
//   );
// };

// // ---

// // BÀI TẬP 5: Đồng hồ
// const ClockDisplay = ({ time }) => {
//   const formattedTime = time.toLocaleTimeString();
//   return <h3>{formattedTime}</h3>;
// };

// const Bai5 = () => {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div>
//       <h2>Bài 5: Đồng hồ</h2>
//       <ClockDisplay time={time} />
//     </div>
//   );
// };

// // ---

// // COMPONENT CHÍNH: App
// function App() {
//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Thực hành ReactJS</h1>
//       <Bai1 />
//       <hr />
//       <Bai2 />
//       <hr />
//       <Bai3 />
//       <hr />
//       <Bai4 />
//       <hr />
//       <Bai5 />
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// import SinhVien from "./SinhVien";
// import MonHoc from "./MonHoc";
// import LopHoc from "./LopHoc";
// import ThongTin from "./ThongTin";

// function App() {
//   return (
//     <div>
//       <SinhVien color="green" />
//       <MonHoc name="Toán học" />
//       <LopHoc tenlop="12A1" />
//       <ThongTin ten="Nguyễn Văn A" tuoi={20} />
//     </div>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// function Home() {
//   return <h1>Trang chủ</h1>;
// }

// function About() {
//   return <h1>Giới thiệu</h1>;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <div style={{ padding: "20px" }}>
//         <h2>Demo React Router</h2>

//         {/* Menu điều hướng */}
//         <nav style={{ marginBottom: "20px" }}>
//           <Link to="/" style={{ marginRight: "10px" }}>Trang chủ</Link>
//           <Link to="/about">Giới thiệu</Link>
//         </nav>

//         {/* Các Route */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Styling with Tailwind CSS
const containerStyle = "p-8 max-w-4xl mx-auto bg-white rounded-xl shadow-lg space-y-8";
const sectionStyle = "bg-gray-50 p-6 rounded-lg shadow-sm";
const buttonStyle = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300";
const navStyle = "flex justify-center space-x-4 p-4 bg-gray-200 rounded-full mb-8";
const navLinkStyle = "text-blue-600 hover:text-blue-800 font-semibold px-4 py-2 rounded-full hover:bg-blue-100 transition-colors duration-200";

// BÀI TẬP 1: Ứng dụng đếm số
const CounterDisplay = ({ count }) => {
  return <p className="text-xl font-medium">Số hiện tại được truyền qua props: <span className="text-blue-600">{count}</span></p>;
};

const Bai1 = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={sectionStyle}>
      <h2 className="text-2xl font-bold mb-4">Bài 1: Ứng dụng đếm số</h2>
      <p className="text-lg mb-4">Giá trị hiện tại: <span className="font-bold text-blue-600">{count}</span></p>
      <div className="space-x-4">
        <button className={buttonStyle} onClick={() => setCount(count - 1)}>-</button>
        <button className={buttonStyle} onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div className="mt-4">
        <CounterDisplay count={count} />
      </div>
    </div>
  );
};

// ---

// BÀI TẬP 2: Danh sách công việc
const TodoItem = ({ todo }) => {
  return <li className="py-2 px-4 bg-white rounded-full shadow-sm">{todo}</li>;
};

const Bai2 = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className={sectionStyle}>
      <h2 className="text-2xl font-bold mb-4">Bài 2: Danh sách công việc</h2>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Nhập công việc"
          className="flex-grow p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className={buttonStyle} onClick={handleAddTodo}>Thêm</button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

// ---

// BÀI TẬP 3: Ứng dụng đổi màu nền
const ColorBox = ({ color }) => {
  const boxStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: color,
    border: '1px solid #ccc',
    transition: 'background-color 0.3s ease-in-out',
  };
  return <div className="rounded-lg shadow-lg mt-4" style={boxStyle}></div>;
};

const Bai3 = () => {
  const [color, setColor] = useState('white');

  return (
    <div className={sectionStyle}>
      <h2 className="text-2xl font-bold mb-4">Bài 3: Ứng dụng đổi màu nền</h2>
      <div className="space-x-2">
        <button className={`${buttonStyle} bg-red-500 hover:bg-red-700`} onClick={() => setColor('red')}>red</button>
        <button className={`${buttonStyle} bg-green-500 hover:bg-green-700`} onClick={() => setColor('green')}>green</button>
        <button className={`${buttonStyle} bg-blue-500 hover:bg-blue-700`} onClick={() => setColor('blue')}>blue</button>
        <button className={`${buttonStyle} bg-yellow-500 hover:bg-yellow-700`} onClick={() => setColor('yellow')}>yellow</button>
      </div>
      <ColorBox color={color} />
    </div>
  );
};

// ---

// BÀI TẬP 4: Thông tin sinh viên
const StudentCard = ({ name, age, className }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <button 
        onClick={() => setShowDetails(!showDetails)}
        className="text-blue-500 hover:text-blue-700 font-medium"
      >
        {showDetails ? 'Ẩn chi tiết' : 'Hiện chi tiết'}
      </button>
      {showDetails && (
        <div className="mt-2 text-gray-700">
          <p>Tuổi: <span className="font-bold">{age}</span></p>
          <p>Lớp: <span className="font-bold">{className}</span></p>
        </div>
      )}
    </div>
  );
};

const Bai4 = () => {
  const studentsData = [
    { name: 'Đinh Thị Mỹ Hạnh', age: 18, className: '12a2' },
    { name: 'Nguyễn Ngọc Linh', age: 18, className: '12c1' },
    { name: 'Nguyễn Minh Phương', age: 19, className: '12a1' },
  ];

  return (
    <div className={sectionStyle}>
      <h2 className="text-2xl font-bold mb-4">Bài 4: Thông tin sinh viên</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {studentsData.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            age={student.age}
            className={student.className}
          />
        ))}
      </div>
    </div>
  );
};

// ---

// BÀI TẬP 5: Đồng hồ
const ClockDisplay = ({ time }) => {
  const formattedTime = time.toLocaleTimeString();
  return <h3 className="text-4xl font-extrabold text-blue-600">{formattedTime}</h3>;
};

const Bai5 = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={sectionStyle}>
      <h2 className="text-2xl font-bold mb-4">Bài 5: Đồng hồ</h2>
      <ClockDisplay time={time} />
    </div>
  );
};

// ---

// COMPONENT CHÍNH: App
function App() {
  return (
    <Router>
      <div className={containerStyle}>
        <h1 className="text-3xl font-bold text-center text-gray-800">Thực hành ReactJS</h1>
        <nav className={navStyle}>
          <Link to="/bai1" className={navLinkStyle}>Bài 1</Link>
          <Link to="/bai2" className={navLinkStyle}>Bài 2</Link>
          <Link to="/bai3" className={navLinkStyle}>Bài 3</Link>
          <Link to="/bai4" className={navLinkStyle}>Bài 4</Link>
          <Link to="/bai5" className={navLinkStyle}>Bài 5</Link>
        </nav>
        <Routes>
          <Route path="/bai1" element={<Bai1 />} />
          <Route path="/bai2" element={<Bai2 />} />
          <Route path="/bai3" element={<Bai3 />} />
          <Route path="/bai4" element={<Bai4 />} />
          <Route path="/bai5" element={<Bai5 />} />
          <Route path="/" element={
            <div className="text-center text-lg text-gray-500 p-8 border-2 border-dashed border-gray-300 rounded-lg">
              Chọn một bài tập từ thanh điều hướng để xem kết quả.
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
