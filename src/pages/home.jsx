function home() {
    return(
        <div>
          <h1 className="text-[4.2em] leading-[1.1]">Personal Portfolio</h1>
          <p className="pb-[20px]">Hello my name is Garrett Kennedy</p>
          <figure>
            <picture className="flex justify-center items-center">
              <img src="src/images/PictureOfSelf.jpg" width="400"/>
            </picture>
          </figure> 
        </div>
    )
}

export default home;