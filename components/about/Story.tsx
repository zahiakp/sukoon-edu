import React from "react";
import StyledButton from "../StyledButton";

function Story() {
  const Data = [
    {img:"",content:"It started with a visit to a small government school in a remote village in Rajasthan. The school had more than 500 children enrolled, but less than 50 attended classes regularly. Seeing empty classrooms and hearing the teachers’ worries left a deep impact on me. They asked, “Can you help us bring the children back to school?” That simple question changed everything for me. For almost three years, I travelled through villages in northern India. I met many people, learned about their lives, and experienced their kindness. But I also saw heartbreaking scenes. In most villages, many children didn’t go to school. Instead, they worked on farms or did other small jobs to earn 10 or 20 rupees a day to help their families survive. Their parents, struggling to feed their families, had no choice but to depend on their children’s earnings."},
    {img:"",content:"These kids were growing up without learning to read or write, missing the chance for a better future. One visit still stays in my heart. I met a family with three children. The oldest should have been in ninth grade, and the youngest in fourth. But none of them had ever gone to school. When I suggested sending them to school, their parents asked, “If they don’t work, how will we survive?” It was painful to see such young children taking on the burden of their families. The root of the problem was clear: poverty. Families living in tiny huts or broken mud houses were focused on surviving each day. We started small learning centres in different villages. We provided food and basic education to encourage children to study. Our goal was to enrol them in government schools. But we quickly realized that many government schools didn’t have quality teaching and proper facilities. This made it hard for the children to stay in school and succeed."},
    {img:"",content:"We think about a place where underprivileged children could live, study, and grow without worrying about their next meal or other struggles. Foundation. Now, we are stepping into the solution. In the peaceful village of Andheka, Sudaka, Haryana, we found a three-acre plot of land to create Sukoon Edu Village. This will be a special place where 600 children can live and study. Children from nearby villages can also join. We plan to set up a CBSE school and, later, introduce vocational training to help children learn skills based on their interests and abilities. This will prepare them to join society as confident and skilled individuals. This dream is big, but it is possible with your support. Together, we can create a brighter future for children who have been left behind. Sukoon Edu Village is not just a project; it’s a promise of hope and opportunity. Let’s come together to make this dream a reality. Every child deserves a chance to learn, grow, and live a life full of possibilities."},
]
  return (
    <div className="w-full bg-lime-100">
    <div className="w-full max-w-[1200px] mx-auto py-20">
      <h6 className="Grotesque-font text-center text-5xl md:text-6xl text-lime-600 font-semibold">
      Our Story</h6>
      <div className="flex flex-col gap-7 md:gap-10 mt-10">
        {Data.map((item:any,index:number)=>(
          <div key={index} className={`flex flex-col  ${index%2==1? 'md:flex-row':"md:flex-row-reverse"} items-center justify-center gap-5 md:gap-20`}>
    <div data-aos="fade-left" className="w-[300px] h-[300px] bg-white shadow-xl border border-lime-400 overflow-hidden rounded-[40px]">
        <img src="/image/IMG_1830test.JPG" alt="" className="h-full w-full object-cover"/>
        </div>
      <div data-aos="fade-right" className="flex items-start flex-col md:w-1/2 px-10">
      
      <p className=" text-left mt-5">
{item.content}        </p>
      </div>
      </div>
        ))}
      </div>
      
    </div>
  </div>
  );
}

export default Story;
