"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartHandshake, TrendingUp, Users, Star, Sparkles, Globe, Award, Brain, Microscope, GraduationCap, MapPin, Calendar, Target, Zap, Lightbulb, BookOpen, Coffee, Telescope } from "lucide-react";
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
        <div className="min-h-screen pt-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse delay-2000"></div>
            </div>

            <div className="relative z-10 px-6 py-32 md:px-16 space-y-32">
                {/* Header Section */}
                <section className="text-center max-w-6xl mx-auto space-y-12">
                    <div className="relative">
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                            <Sparkles className="text-blue-500 animate-bounce" size={48} />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 leading-tight">
                            Support the LC Lab
                        </h1>
                        <div className="mt-6 w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
                    </div>
                    <p className="text-2xl md:text-2xl text-slate-700 leading-relaxed max-w-5xl mx-auto font-light">
                        Your support drives research in theoretical, applied, experimental, and cognitive linguistics, language science, and linguistic technology.
                        <span className="text-blue-600 font-semibold"> Here's why your contribution matters.</span>
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                            <Telescope className="text-blue-500" size={24} />
                            <span className="text-slate-700 font-medium">Language-Focused Research</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                            <Brain className="text-purple-500" size={24} />
                            <span className="text-slate-700 font-medium">Cognitive Investigation</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                            <Microscope className="text-indigo-500" size={24} />
                            <span className="text-slate-700 font-medium">Collaborative Science</span>
                        </div>
                    </div>
                </section>

                {/* Why Fund Us and What We'll Do */}
                <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
                    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                        <CardContent className="p-12 space-y-8">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <HeartHandshake className="text-white" size={48} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-slate-800 mb-2">Why Fund Us?</h2>
                                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-100 rounded-xl">
                                        <MapPin className="text-blue-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800 mb-1">Linguistic Diversity</h3>
                                        <p className="text-slate-700">To advance cognitive and language research in India's rich linguistic landscape</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-purple-100 rounded-xl">
                                        <Zap className="text-purple-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800 mb-1">Innovation Drive</h3>
                                        <p className="text-slate-700">To empower interdisciplinary innovation across linguistics, neuroscience, and computation</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-indigo-100 rounded-xl">
                                        <BookOpen className="text-indigo-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800 mb-1">Knowledge Production</h3>
                                        <p className="text-slate-700">To produce knowledge to uncover the interfaces of linguistics research</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-green-100 rounded-xl">
                                        <Globe className="text-green-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800 mb-1">Global Collaboration</h3>
                                        <p className="text-slate-700">Expand cross-cultural academic collaboration</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                        <CardContent className="p-12 space-y-8">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="p-4 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <TrendingUp className="text-white" size={48} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-slate-800 mb-2">What We'll Do</h2>
                                    <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-green-100 rounded-xl">
                                        <Microscope className="text-green-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800 mb-1">Research Equipment</h3>
                                        <p className="text-slate-700">Purchase research equipment (eye-tracking, EEG, etc.)</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-teal-100 rounded-xl">
                                        <GraduationCap className="text-teal-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800 mb-1">Student Support</h3>
                                        <p className="text-slate-700">Offer student fellowships and research assistantships</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-100 rounded-xl">
                                        <Target className="text-blue-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800 mb-1">Field Research</h3>
                                        <p className="text-slate-700">Fund fieldwork and multilingual data collection</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-purple-100 rounded-xl">
                                        <Calendar className="text-purple-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800 mb-1">Knowledge Sharing</h3>
                                        <p className="text-slate-700">Host workshops and knowledge-sharing events</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Call to Action */}
                <section className="max-w-5xl mx-auto text-center space-y-12">
                    <div className="relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <div className="flex gap-2">
                                <Star className="text-yellow-400 animate-pulse" size={32} />
                                <Star className="text-yellow-400 animate-pulse delay-200" size={32} />
                                <Star className="text-yellow-400 animate-pulse delay-400" size={32} />
                            </div>
                        </div>
                        <div className="p-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full w-32 h-32 mx-auto flex items-center justify-center shadow-2xl">
                            <Users className="text-white" size={64} />
                        </div>
                    </div>

                    <div className="space-y-5">
                        <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600">
                            Be a Part of Our Journey
                        </h2>
                        <p className="text-xl md:text-2xl pt-2 text-slate-700 leading-relaxed max-w-4xl mx-auto font-light">
                            Whether you are an individual donor, corporate sponsor, or institution, your contribution supports the future of
                            <span className="text-blue-600 font-semibold"> inclusive, diverse, and rigorous language science research. </span>
                        </p>
                        <p className="text-xl md:text-2xl text-slate-700 leading-relaxed max-w-4xl mx-auto font-light">
                            Join us in contributing to language and cognition research with special focus on Indian societies and Indian languages.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button
                            onClick={handleDonationClick}
                            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xl font-semibold px-12 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            <div className="flex items-center gap-3">
                                <Lightbulb className="group-hover:animate-pulse" size={24} />
                                <span>Make a Donation</span>
                            </div>
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => router.push("/contact")}
                            className="group text-slate-700 border-2 border-slate-300 hover:border-blue-500 hover:text-blue-600 text-lg font-medium px-8 py-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-3">
                                <Coffee className="group-hover:animate-bounce" size={20} />
                                <span>Join Us</span>
                            </div>
                        </Button>
                    </div>

                    {/* Donation Modal */}
                    {isModalOpen && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-3xl font-bold text-slate-800">Thank You!</h2>
                                    <button
                                        onClick={closeModal}
                                        className="text-slate-500 hover:text-slate-700 text-2xl font-bold"
                                    >
                                        &times;
                                    </button>
                                </div>
                                <p className="text-lg text-slate-700 mb-6">
                                    We deeply appreciate your interest in supporting the LC Lab's mission to advance language and cognition research.
                                    Your generosity helps us drive innovation, support students, and preserve linguistic diversity.
                                </p>
                                <p className="text-lg text-slate-700 mb-8">
                                    To further fund our initiatives or discuss partnership opportunities, please reach out to our team.
                                </p>
                                <div className="flex justify-center">
                                    <Button
                                        onClick={() => router.push("/contact")}
                                        className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Coffee className="group-hover:animate-bounce" size={20} />
                                            <span>Contact Us</span>
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Brain className="text-blue-600" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">Research Excellence</h3>
                            <p className="text-slate-600">Pioneering linguistic and cognitive research</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Globe className="text-purple-600" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">Cultural Preservation</h3>
                            <p className="text-slate-600">Maintaining cultural linguistic roots</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Award className="text-indigo-600" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">Innovation</h3>
                            <p className="text-slate-600">Interdisciplinarity in language research</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}