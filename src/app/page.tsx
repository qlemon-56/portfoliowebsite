import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 font-sans dark:bg-white h-full">
      <header className="w-full py-6 px-8 flex justify-between items-center bg-neutral-400/60 h-12">
        <div className="flex text-white">
          <span className="w-1/4 justify-start">Mark Imade</span>

          <div className="w-3/4">
            <span>About Me</span>
            <span>Projects</span>
          </div>
        </div>
        <div>9:18 PM</div>
      </header>

      <main className="flex-1 w-full flex items-center justify-center py-32 px-16 bg-white text-neutralgray sm:items-start">


        <div className="w-1/3 h-full justify-start">
          <ul>Hey I'm</ul>
          <span>
            <ul className="text-[100px]">Mark</ul>
            <ul>Imade</ul>
          </span>
          

        </div>
        <div className="w-2/3 h-full text-[20px] items-centers">
          I’m a 1st year student studying Electronic and Computer Engineering at the University of York
          
          I’m currently working on XXXX, but I’m also interested in finance and technology. 


        </div>

        
      </main>

      <footer className="w-full py-6 px-8 h-12">
        <div className="mx-auto flex justify-between text-sm text-neutralgray">
          <span className="w-2/7 justify-center">© Mark Imade 2026</span>
          <div className="flex space-x-4 w-5/7 justify-center">
            <a href="https://www.linkedin.com/in/mark-imade/" target="_blank">LinkedIn</a>
            <a href="https://github.com/qlemon-56" target="_blank">Github</a>
            <a href="mailto:xpp517@york.ac.uk">xpp517@york.ac.uk</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
