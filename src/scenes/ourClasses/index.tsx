import { SelectedPage, ClassType } from '@/shared/types';
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Class from "./Class";

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description:
          "Build strength and tone your muscles with our expert-led weight training classes. Whether you're lifting for the first time or a seasoned lifter, our sessions are tailored to help you enhance endurance, improve posture, and increase overall strength.",
        image: image1,
      },
      {
        name: "Yoga Classes",
        description:
          "Find your balance with our yoga classes, designed to improve flexibility, reduce stress, and promote mental clarity. Perfect for all levels, our sessions guide you through calming poses and breathing techniques for a rejuvenating experience.",
        image: image2,
      },
      {
        name: "Ab Core Classes",
        description:
          "Strengthen your core and sculpt your abs with targeted exercises in our ab core classes. Ideal for boosting stability, improving posture, and building a strong foundation, these sessions are both challenging and rewarding.",
        image: image3,
      },
      {
        name: "Adventure Classes",
        description:
          "Push your limits with our adventure classes that combine fitness with exciting challenges. From obstacle courses to team-building workouts, these sessions are perfect for those who love fun, high-energy activities with a twist.",
        image: image4,
      },
      {
        name: "Fitness Classes",
        description:
          "Stay fit and active with our diverse fitness classes, offering a mix of cardio, strength, and endurance exercises. Perfect for all levels, these sessions are designed to keep you motivated and energized.",
        image: image5,
      },
      {
        name: "Training Classes",
        description:
          "Achieve your fitness goals with our specialized training classes. Led by expert coaches, these sessions are tailored to enhance performance, build strength, and improve overall fitness levels, whether you're a beginner or a pro.",
        image: image6,
      },
      
];
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id="ourclasses" className='w-full bg-primary-100 py-40'>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
                <motion.div
                    className='mx-auto w-5/6'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className='md:w-3/5'>
                        <HText>OUR CLASSES</HText>
                        <p className='py-5 '>
                            Our classes are designed to be fun, challenging, and rewarding. We offer a variety of classes to suit all fitness levels and interests.
                            Whether you are looking to improve your strength, flexibility, or endurance,
                            we have a class for you. Our instructors are experienced and knowledgeable, and they will help you
                            achieve your fitness goals. So come join us and start your fitness journey today!
                        </p>
                    </div>
                </motion.div>
                <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                    <ul className='w-[2800px] whitespace-nowrap'>
                        {classes.map((item: ClassType, index) => (
                            <Class
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                            />
                        ))}

                    </ul>

                </div>
            </motion.div>
        </section>

    )
}

export default OurClasses;
