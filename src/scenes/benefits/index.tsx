import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React from "react";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Modern Equipment",
        description: "Take your workouts to the next level with our state-of-the-art fitness equipment. From advanced treadmills and ellipticals to top-tier strength machines and free weights, we provide the tools to suit every fitness need."
    }, {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Group Classes",
        description: "Bring energy and fun to your fitness routine with our diverse group classes. Whether it's the calming flow of yoga, the high-energy beats of Zumba, or the intense burn of HIIT sessions, our classes are designed to keep you engaged and inspired which is led by passionate instructors"
    }, {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Certified Trainers",
        description: "Achieve your fitness goals with the expertise of our certified trainers. Whether you're a beginner looking for guidance or an athlete aiming to enhance performance, our trainers create personalized plans tailored to your needs."
    }
];

const container = {
    hidden: {},
    vivible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section
            id="benefits"
            className="mx-auto min-h-full w-5/6 py-20"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                {/* HEADER */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>MORE THAN JUST A GYM.</HText>
                    <p className="my-5 text-sm">
                        We provide world class ftness equipments, trainers and classes to help you
                        achieve your fitness goals with ease. Our gym is designed to give you the best
                        experience possible. We provide true care into each and every member.
                    </p>
                </motion.div>
                {/* BENEFITS */}
                <motion.div
                    className="mt-5 items-center justify-between gap-8 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>

                {/* GRAPHICS AND DESCRIPTION */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* GRAPHIC */}
                    <img
                        className="mx-auto"
                        alt="benefits-graphic-page"
                        src={BenefitsPageGraphic}
                    />

                    {/* DESCRIPTION */}
                    <div>
                        {/* TITLE */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves" >
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <HText>MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                        <span className="text-primary-500">FIT</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>

                        {/* DESCRIPTION */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                              hidden: { opacity: 0, x: 50 },
                              visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className="my-5">
                                We believe that fitness is not just about physical strength but also about cultivating a healthier mind and a happier lifestyle.
                                Our state-of-the-art facility is designed to cater to fitness enthusiasts of all levels, from beginners taking their first step
                                toward wellness to seasoned athletes aiming to push their boundaries. Equipped with the latest fitness technology,
                                diverse workout zones, and an array of premium amenities, we ensure you have
                                everything you need to stay motivated and achieve your goals.
                            </p>
                            <p className="mb-5">
                                At Evogym, we’re not just a gym – we’re a lifestyle. From flexible membership options to cutting-edge equipment and a range of wellness services, we’re dedicated to helping you achieve your fitness aspirations in a way that fits your schedule and needs. Take the first step today and let us help you unlock the best version of yourself.
                            </p>
                        </motion.div>

                        {/* BUTTON */}
                        <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    )
}

export default Benefits;