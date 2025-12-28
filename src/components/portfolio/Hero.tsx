export const Hero = () => {
  const calculateAge = () => {
    const birthDate = new Date(2006, 5, 3);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  return (
    <section>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
        Mayur
      </h1>
      <p className="mt-2 text-base text-muted-foreground">
        {calculateAge()}, passionate.
      </p>
      
      <div className="mt-8">
        <p className="text-base md:text-lg text-foreground leading-[1.6]">
          computer engineering student, who specializes in,
        </p>
        <a 
          href="#skills" 
          className="text-xl md:text-2xl text-link hover:underline underline-offset-4 font-medium"
        >
          dev & devops
        </a>
      </div>
      
      <p className="mt-6 text-base md:text-lg text-foreground leading-[1.6]">
        Web developer and Devops engineer with a really good eye for aesthetics
        & strong hold on backend, deployments & scaling.
      </p>
      
      <p className="mt-4 text-base text-foreground leading-[1.6]">
        <a 
          href="https://x.com/mayurbadgujar36" 
          className="text-link hover:underline underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shitposting on X
        </a>
        . You can always reach me at this{" "}
        <a 
          href="mailto:mayurbadgujar873@gmail.com" 
          className="text-link hover:underline underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          email
        </a>
        .
      </p>
    </section>
  );
};
