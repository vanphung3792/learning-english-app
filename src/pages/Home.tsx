import { Link, Outlet } from "react-router-dom";

const Home = () => {

  const buttonStyle = "bg-rose-200 text-rose-500 hover:bg-rose-500 hover:text-white font-bold py-2 px-4 rounded"

  const lessons = [];
    for (let i = 1; i <= 20; i++) {
      lessons.push(i);
    }

    return (
      <div id="home"
        className="flex flex-col justify-center items-start h-screen px-[15%]"
      >
        <h1>Hãy chọn 1 bài học bên dưới:</h1>
        <div
          className="flex flex-wrap justify-start items-center gap-4"
        >
          {lessons.map((lesson, index) => (
            <Link key={index} to={`/lesson/${lesson}`} className={buttonStyle}>Bài {lesson}</Link>
          ))}
        </div>
        <Outlet></Outlet>
      </div>
    );
}
export default Home