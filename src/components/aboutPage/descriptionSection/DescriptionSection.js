import React from "react";

function DescriptionSection({ descriptionText, aboutImage }) {
  return (
    <section className='about__description-section'>
      <div className='temporary-image-box'></div>
      <img
        src={aboutImage}
        alt='Jinkyu Kang'
        className='about__description-section__image'
      />

      <div className='about__description-section__description'>
        <div className='about__description-section__description__scroll'>
          {descriptionText.map((each, index) => (
            <p key={`${each}-${index}`}>{each}</p>
          ))}
        </div>
        <a
          href='https://www.dropbox.com/sh/yc82hs2f9b54z21/AAB8qTepucEG8kItrGOGHpj-a?dl=0'
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg
            width='80'
            height='24'
            viewBox='0 0 80 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M19.9899 9.944C19.5979 9.832 18.1139 9.832 17.6519 9.888C17.4279 9.902 16.8959 10.56 16.4059 11.232V10.14C16.4059 10.056 16.3499 10 16.2659 10H13.6059C13.4939 10 13.4379 10.126 13.5219 10.21L14.5999 11.204V15.614L13.4659 16.79C13.3819 16.874 13.4379 17 13.5499 17H17.5119C17.6239 17 17.6799 16.874 17.5959 16.79L16.4059 15.6V12.478C17.1339 11.526 18.0439 10.49 18.3659 10.462C18.6319 10.42 18.4919 11.89 18.3099 13.024C18.2959 13.108 18.3659 13.15 18.4359 13.136L20.0319 12.73C20.0599 12.716 20.0879 12.702 20.0879 12.66C20.1999 11.638 20.2699 10.014 19.9899 9.944ZM27.712 14.144C27.292 14.634 25.612 16.342 25.458 16.342C25.276 16.342 22.574 14.466 22.532 14.41C22.476 14.368 22.504 14.116 22.504 14.116C22.504 14.116 28.244 12.716 28.314 12.548C28.37 12.408 26.774 10.182 26.508 10.028C26.214 9.846 23.428 9.874 23.288 9.972C23.148 10.056 21.244 11.484 21.104 11.694C20.964 11.904 20.558 14.928 20.628 15.166C20.698 15.39 23.274 16.958 23.442 17.014C23.596 17.07 25.836 17.14 25.99 17.056C26.13 16.972 27.838 15.222 28.398 14.648C28.454 14.592 28.44 14.494 28.37 14.438L27.88 14.116C27.824 14.088 27.754 14.102 27.712 14.144ZM22.798 12.478C22.924 12.254 24.912 10.812 24.912 10.812C25.08 10.854 26.158 12.338 26.158 12.338L22.574 13.332C22.574 13.332 22.686 12.716 22.798 12.478ZM35.4212 11.484L34.3012 12.338C34.2732 12.352 34.2312 12.366 34.1892 12.338C33.8392 12.058 31.6832 10.336 31.4172 10.462C31.1932 10.574 30.8712 12.044 30.9832 12.156C31.2072 12.366 35.0152 13.542 35.1832 13.822C35.3932 14.158 35.0712 15.908 34.9452 16.16C34.8192 16.426 32.2852 17.238 31.8652 17.126C30.9692 16.902 29.1492 15.782 28.7432 15.53C28.7012 15.502 28.6872 15.446 28.7152 15.404L29.5412 14.326C29.5692 14.284 29.6112 14.284 29.6392 14.312C30.1292 14.578 33.2232 16.342 33.3772 16.3C33.5312 16.244 33.5872 14.788 33.5172 14.662C33.4472 14.55 29.3732 13.178 29.2472 13.01C29.1212 12.842 29.4292 10.56 29.5552 10.364C29.6812 10.182 32.8032 9.748 33.1812 9.846C33.5032 9.93 35.0152 11.036 35.4212 11.344C35.4772 11.386 35.4772 11.442 35.4212 11.484ZM44.8618 16.79L43.7838 15.796V10.084C43.7838 10.042 43.7418 10 43.6998 10H40.8998C40.7878 10 40.7318 10.126 40.8158 10.21L41.9778 11.386V13.71C41.9778 15.026 40.4378 16.426 40.0178 16.482C39.6678 16.524 38.9538 15.082 38.9118 14.788C38.8838 14.592 38.8138 10.882 38.8138 10.14C38.8138 10.056 38.7438 10 38.6738 10H35.7898C35.6778 10 35.6218 10.126 35.7058 10.21L36.8678 11.386C36.8678 12.772 36.8818 14.746 36.9518 15.012C37.0498 15.39 38.0158 16.902 38.3938 17C38.7858 17.098 40.2698 17.112 40.7318 17.056C40.9418 17.028 41.5018 16.636 41.9778 15.894V16.916C41.9778 16.958 42.0198 17 42.0618 17H44.7778C44.8898 17 44.9458 16.874 44.8618 16.79ZM59.4128 16.79L58.2508 15.614C58.2508 14.228 58.2368 12.24 58.1668 11.974C58.0688 11.596 57.1028 10.084 56.7248 9.986C56.3328 9.888 54.8488 9.874 54.3868 9.93C54.1348 9.958 53.5748 10.504 53.1408 11.526C52.8048 10.924 52.1888 10.056 51.9088 9.986C51.5168 9.888 50.0328 9.874 49.5708 9.93C49.3748 9.958 48.9828 10.294 48.6048 10.952V10.14C48.6048 10.056 48.5488 10 48.4648 10H45.8048C45.6928 10 45.6368 10.126 45.7208 10.21L46.7848 11.19V15.642L46.7568 15.614L45.5948 16.79C45.5108 16.874 45.5668 17 45.6788 17H49.6968C49.8088 17 49.8648 16.874 49.7808 16.79L48.6188 15.614L48.6048 15.628V13.276C48.6048 11.96 49.8648 10.56 50.2848 10.504C50.6348 10.462 51.3488 11.904 51.3908 12.198C51.4048 12.338 51.4468 14.256 51.4748 15.614L50.3128 16.79C50.2288 16.874 50.2848 17 50.3968 17H54.4988C54.6108 17 54.6668 16.874 54.5828 16.79L53.4348 15.628C53.4348 14.9 53.4348 14.004 53.4208 13.276C53.4208 11.96 54.6808 10.56 55.1008 10.504C55.4508 10.462 56.1648 11.904 56.2068 12.198C56.2208 12.338 56.2628 14.256 56.2908 15.614L55.1288 16.79C55.0448 16.874 55.1008 17 55.2128 17H59.3288C59.4408 17 59.4968 16.874 59.4128 16.79ZM65.5229 6.794L62.1629 8.348L62.4849 9.146L65.9989 7.956L65.5229 6.794ZM66.9229 14.144C66.5029 14.634 64.8229 16.342 64.6689 16.342C64.4869 16.342 61.7849 14.466 61.7429 14.41C61.6869 14.368 61.7149 14.116 61.7149 14.116C61.7149 14.116 67.4549 12.716 67.5249 12.548C67.5809 12.408 65.9849 10.182 65.7189 10.028C65.4249 9.846 62.6389 9.874 62.4989 9.972C62.3589 10.056 60.4549 11.484 60.3149 11.694C60.1749 11.904 59.7689 14.928 59.8389 15.166C59.9089 15.39 62.4849 16.958 62.6529 17.014C62.8069 17.07 65.0469 17.14 65.2009 17.056C65.3409 16.972 67.0489 15.222 67.6089 14.648C67.6649 14.592 67.6509 14.494 67.5809 14.438L67.0909 14.116C67.0349 14.088 66.9649 14.102 66.9229 14.144ZM62.0089 12.478C62.1349 12.254 64.1229 10.812 64.1229 10.812C64.2909 10.854 65.3689 12.338 65.3689 12.338L61.7849 13.332C61.7849 13.332 61.8969 12.716 62.0089 12.478Z'
              fill='black'
            />
            <path d='M7 9H9L5 17H3L7 9Z' fill='#FF3A00' />
            <path d='M76 9H78L74 17H72L76 9Z' fill='#FF3A00' />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default DescriptionSection;
