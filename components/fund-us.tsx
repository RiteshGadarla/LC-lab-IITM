"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartHandshake, TrendingUp, Users, Globe, Award, Brain, Microscope, GraduationCap, MapPin, Calendar, Target, Zap, Lightbulb, BookOpen, Coffee, Telescope, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function FundUsSection() {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDonationClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
                {/* Header Section */}
                <section className="text-center max-w-4xl mx-auto space-y-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6 ">
                            Support the LC Lab
                        </h1>
                        <div className="w-24 h-1 bg-[#000080] mx-auto rounded-full"></div>
                    </div>
                    <p className="text-xl text-slate-700 leading-relaxed font-light">
                        Your support drives research in theoretical, applied, experimental, and cognitive linguistics, language science, and linguistic technology.
                        <span className="font-semibold text-slate-900"> Here's why your contribution matters.</span>
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mt-8">
                        <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-full px-6 py-2 shadow-sm">
                            <Telescope className="text-[#000080]" size={20} />
                            <span className="text-slate-800 font-medium text-sm tracking-wide">Language-Focused Research</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-full px-6 py-2 shadow-sm">
                            <Brain className="text-[#000080]" size={20} />
                            <span className="text-slate-800 font-medium text-sm tracking-wide">Cognitive Investigation</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-full px-6 py-2 shadow-sm">
                            <Microscope className="text-[#000080]" size={20} />
                            <span className="text-slate-800 font-medium text-sm tracking-wide">Collaborative Science</span>
                        </div>
                    </div>
                </section>

                {/* Main Content Grid */}
                <section className="grid md:grid-cols-2 gap-12">
                    {/* Why Fund Us */}
                    <Card className="bg-white border text-card-foreground shadow-sm rounded-xl overflow-hidden">
                        <CardHeader className="bg-slate-100/50 border-b border-slate-100 p-8 pb-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-50 rounded-lg">
                                    <HeartHandshake className="text-[#000080]" size={32} />
                                </div>
                                <CardTitle className="text-2xl font-bold text-slate-900">Why Fund Us?</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-8 pt-6 space-y-6">
                            <div className="flex gap-4">
                                <MapPin className="text-slate-400 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <h3 className="font-semibold text-slate-900 text-lg">Linguistic Diversity</h3>
                                    <p className="text-slate-600 leading-relaxed mt-1">To advance language and cognition research against the backdrop of India’s linguistic richness.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Zap className="text-slate-400 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <h3 className="font-semibold text-slate-900 text-lg">Innovation Drive</h3>
                                    <p className="text-slate-600 leading-relaxed mt-1">To empower interdisciplinary innovation across linguistics, neuroscience, and computation</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <BookOpen className="text-slate-400 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <h3 className="font-semibold text-slate-900 text-lg">Knowledge Production</h3>
                                    <p className="text-slate-600 leading-relaxed mt-1">To produce knowledge to uncover the interfaces of linguistics research</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Globe className="text-slate-400 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <h3 className="font-semibold text-slate-900 text-lg">Global Collaboration</h3>
                                    <p className="text-slate-600 leading-relaxed mt-1">To expand cross-cultural academic collaboration</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* What We'll Do */}
                    <Card className="bg-white border text-card-foreground shadow-sm rounded-xl overflow-hidden">
                        <CardHeader className="bg-slate-100/50 border-b border-slate-100 p-8 pb-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-teal-50 rounded-lg">
                                    <TrendingUp className="text-teal-700" size={32} />
                                </div>
                                <CardTitle className="text-2xl font-bold text-slate-900">What We'll Do</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-8 pt-6 space-y-6">
                            <div className="flex gap-4">
                                <Microscope className="text-slate-400 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <h3 className="font-semibold text-slate-900 text-lg">Research Equipment</h3>
                                    <p className="text-slate-600 leading-relaxed mt-1">Purchase research equipment (eye-tracking, EEG, etc.)</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <GraduationCap className="text-slate-400 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <h3 className="font-semibold text-slate-900 text-lg">Student Support</h3>
                                    <p className="text-slate-600 leading-relaxed mt-1">Offer student fellowships and research assistantships</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Target className="text-slate-400 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <h3 className="font-semibold text-slate-900 text-lg">Field Research</h3>
                                    <p className="text-slate-600 leading-relaxed mt-1">Fund fieldwork and multilingual data collection</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Calendar className="text-slate-400 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <h3 className="font-semibold text-slate-900 text-lg">Knowledge Sharing</h3>
                                    <p className="text-slate-600 leading-relaxed mt-1">Host workshops and knowledge-sharing events</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Impact Grid - Simplified */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-200 pt-16">
                    <div className="text-center p-6 rounded-lg hover:bg-white transition-colors duration-300">
                        <Brain className="text-[#000080] mx-auto mb-4" size={40} strokeWidth={1.5} />
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Research Excellence</h3>
                        <p className="text-slate-600">Pioneering linguistic and cognitive research</p>
                    </div>
                    <div className="text-center p-6 rounded-lg hover:bg-white transition-colors duration-300">
                        <Globe className="text-[#000080] mx-auto mb-4" size={40} strokeWidth={1.5} />
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Cultural Preservation</h3>
                        <p className="text-slate-600">Maintaining cultural linguistic roots</p>
                    </div>
                    <div className="text-center p-6 rounded-lg hover:bg-white transition-colors duration-300">
                        <Award className="text-[#000080] mx-auto mb-4" size={40} strokeWidth={1.5} />
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Innovation</h3>
                        <p className="text-slate-600">Interdisciplinarity in language research</p>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-[#000080] rounded-2xl overflow-hidden shadow-lg relative">
                    <div className="absolute top-0 right-0 p-12 opacity-10">
                        <Users size={200} className="text-white" />
                    </div>
                    <div className="relative z-10 px-8 py-16 text-center max-w-4xl mx-auto space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Be a Part of Our Journey
                        </h2>
                        <div className="space-y-4 text-blue-100 text-lg leading-relaxed font-light">
                            <p>
                                Whether you are an individual donor, corporate sponsor, or institution, your contribution supports the future of
                                <span className="text-white font-medium"> inclusive, diverse, and rigorous language science research. </span>
                            </p>
                            <p>
                                Join us in contributing to language and cognition research with special focus on Indian societies and Indian languages.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button
                                onClick={handleDonationClick}
                                className="bg-white text-[#000080] hover:bg-blue-50 font-semibold px-8 py-6 text-lg rounded-full shadow-md transition-all h-auto"
                            >
                                <Lightbulb className="mr-2" size={20} />
                                Make a Donation
                            </Button>

                            <Button
                                variant="outline"
                                onClick={() => router.push('/lclab/contact')}
                                className="border-white text-white hover:bg-white/10 hover:text-white font-medium px-8 py-6 text-lg rounded-full transition-all h-auto bg-transparent"
                            >
                                <Coffee className="mr-2" size={20} />
                                Join Us
                            </Button>
                        </div>

                    </div>
                </section>

                {/* Donation Modal - Cleaned up */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                            <div className="p-8 pb-6 border-b border-slate-100 flex justify-between items-start">
                                <h2 className="text-2xl font-bold text-slate-900">Thank You!</h2>
                                <button
                                    onClick={closeModal}
                                    className="text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    <span className="sr-only">Close</span>
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="p-8 space-y-6">
                                <p className="text-slate-600 leading-relaxed">
                                    We deeply appreciate your interest in supporting the LC Lab's mission to advance language and cognition research.
                                    Your generosity helps us drive innovation, support students, and preserve linguistic diversity.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    To further fund our initiatives or discuss partnership opportunities, please reach out to our team.
                                </p>
                                <div className="pt-2">
                                    <Button
                                        onClick={() => router.push("/lclab/contact")}
                                        className="w-full bg-[#000080] hover:bg-blue-900 text-white font-semibold py-4 h-auto rounded-lg"
                                    >
                                        <Mail className="mr-2" size={18} />
                                        Contact Us
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}