"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { researchProjects, publications, conferences } from "@/lib/researchData"
import { Calendar, MapPin, Users, Award, Link2 } from "lucide-react"

export function ResearchSection() {
  const [activeTab, setActiveTab] = useState("projects")
  const [projectPage, setProjectPage] = useState(0)
  const [publicationPage, setPublicationPage] = useState(0)
  const [conferencePage, setConferencePage] = useState(0)

  const itemsPerPage = 6

  // Split data into chunks of 6
  const projectChunks = []
  for (let i = 0; i < researchProjects.length; i += itemsPerPage) {
    projectChunks.push(researchProjects.slice(i, i + itemsPerPage))
  }
  const publicationChunks = []
  for (let i = 0; i < publications.length; i += itemsPerPage) {
    publicationChunks.push(publications.slice(i, i + itemsPerPage))
  }
  const conferenceChunks = []
  for (let i = 0; i < conferences.length; i += itemsPerPage) {
    conferenceChunks.push(conferences.slice(i, i + itemsPerPage))
  }

  return (
      <section id="research" className="pt-32 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#254D70] text-center mb-8 border-b-4 border-[#954C2E] inline-block w-full pb-4">Research Portfolio</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our ongoing projects, publications, and contributions to the field of language and cognition
              research.
            </p>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger
                  value="projects"
                  className="flex items-center gap-2 rounded-md data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-md"
              >
                <Users size={16} />
                Projects
              </TabsTrigger>
              <TabsTrigger
                  value="publications"
                  className="flex items-center gap-2 rounded-md data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-md"
              >
                <Award size={16} />
                Publications
              </TabsTrigger>
              <TabsTrigger
                  value="conferences"
                  className="flex items-center gap-2 rounded-md data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-md"
              >
                <MapPin size={16} />
                Conferences
              </TabsTrigger>
            </TabsList>

            {/* Projects */}
            <TabsContent value="projects" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {projectChunks[projectPage]?.map((project, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          {project.year && (
                              <div className="flex items-center text-sm text-slate-500">
                                <Calendar size={14} className="mr-1" />
                                {project.year}
                              </div>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-tight">{project.title}</h3>
                        <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                        <div className="text-sm text-slate-500">
                          <strong>Funded by:</strong> {project.sponsor}
                        </div>
                      </CardContent>
                    </Card>
                )) || <p className="text-slate-600">No projects available.</p>}
              </div>
              {projectChunks.length > 1 && (
                  <div className="flex justify-center mt-4 space-x-2">
                    {projectChunks.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setProjectPage(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                index === projectPage ? "bg-blue-600" : "bg-slate-300"
                            }`}
                        />
                    ))}
                  </div>
              )}
            </TabsContent>

            {/* Publications */}
            <TabsContent value="publications" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {publicationChunks[publicationPage]?.map((pub, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold text-slate-900 flex-1 mr-4">{pub.title}</h3>
                          <Badge variant="outline">{pub.year}</Badge>
                        </div>
                        <p className="text-slate-600 mb-2">{pub.authors.join(", ")}</p>
                        <p className="text-sm text-slate-500 italic">
                          {pub.journal}
                          {pub.volume && `, ${pub.volume}`}
                          {pub.publisher && `, ${pub.publisher}`}
                        </p>
                        {(pub.doi || pub.link) && (
                            <div className="flex items-center text-sm text-blue-600 mt-2">
                              <Link2 size={14} className="mr-1" />
                              {pub.doi && (
                                  <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                                    DOI
                                  </a>
                              )}
                              {pub.doi && pub.link && " | "}
                              {pub.link && (
                                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                                    Link
                                  </a>
                              )}
                            </div>
                        )}
                      </CardContent>
                    </Card>
                )) || <p className="text-slate-600">No publications available.</p>}
              </div>
              {publicationChunks.length > 1 && (
                  <div className="flex justify-center mt-4 space-x-2">
                    {publicationChunks.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setPublicationPage(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                index === publicationPage ? "bg-blue-600" : "bg-slate-300"
                            }`}
                        />
                    ))}
                  </div>
              )}
            </TabsContent>

            {/* Conferences */}
            <TabsContent value="conferences" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {conferenceChunks[conferencePage]?.map((conf, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center text-sm text-slate-500">
                            <Calendar size={14} className="mr-1" />
                            {conf.date}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-3">{conf.title}</h3>
                        <p className="text-slate-600 mb-2">
                          <strong>Authors:</strong> {conf.authors.join(", ")}
                        </p>
                        <p className="text-slate-600 mb-2">
                          <strong>Conference:</strong> {conf.conference}
                        </p>
                        {conf.organizer && (
                            <p className="text-slate-600 mb-2">
                              <strong>Organizer:</strong> {conf.organizer}
                            </p>
                        )}
                        <div className="flex items-center text-sm text-slate-500">
                          <MapPin size={14} className="mr-1" />
                          {conf.location}
                        </div>
                      </CardContent>
                    </Card>
                )) || <p className="text-slate-600">No conferences available.</p>}
              </div>
              {conferenceChunks.length > 1 && (
                  <div className="flex justify-center mt-4 space-x-2">
                    {conferenceChunks.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setConferencePage(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                index === conferencePage ? "bg-blue-600" : "bg-slate-300"
                            }`}
                        />
                    ))}
                  </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
  )
}