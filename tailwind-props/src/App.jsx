import "./App.css";
import Card from "./Components/Card";

function App() {

  return (
    <>
      <h1 className="bg-green-500 text-white p-4 rounded-xl mb-4">
        I am learning Tailwind.
      </h1>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 mb-5">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://64.media.tumblr.com/619a63da7dd4b0d6591a6d6436bbe39b/976a50a586e834ab-f7/s128x128u_c1/015cc8f45dd926e07b8a9a863a3d87e6784b98c4.jpg"
          alt="Profile picture"
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I&apos;ve seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div>Sarah Dayan</div>
            <div>Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure>
      <Card username="Avinash" btnText = "Read More"/>
      <Card username="Adarsh"/>
    </>
  );
}

export default App;
