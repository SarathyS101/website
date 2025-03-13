"use client";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import { Card, CardContent,CardHeader } from "@/components/ui/card";
import Image from "next/image";
export default function timelineProjects(){
    return(
        <>
            <main className="bg-gradient-to-r from-indigo-100 to-green-100"> 
                <div className="flex-col items-center justify-center">
                    <div className="flex justify-center pt-8 pb-8">
                    <h1 className="text-4xl font-bold text-indigo-700 tracking-wide">{"Timeline & Projects"}</h1>
                    </div>
                    <Timeline position="alternate">
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="primary"/>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent>
                                <Card className="shadow-lg border border-gray-300">
                                    <CardHeader className="">
                                        <Image 
                                            src="/imgs/unc_stadium.jpeg" 
                                            alt="UNC Chapel Hill Campus"
                                            width={500}
                                            height={500}
                                            className="w-full object-cover rounded-t-lg"
                                        />
                                    </CardHeader>
                                    <CardContent className="p-4">
                                        <h2 className="text-xl font-semibold">{"Officially a Tar Heel!"}</h2>
                                        <p className="text-gray-600">{"August 2024"}</p>
                                    </CardContent>
                                </Card>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="primary"/>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent>
                                <Card className="shadow-lg border border-gray-300">
                                    <CardHeader>
                                    <Image 
                                            src="/imgs/unc_stadium.jpeg" 
                                            alt="UNC Chapel Hill Campus"
                                            width={500}
                                            height={500}
                                            className="w-full object-cover rounded-t-lg"
                                        />
                                    </CardHeader>
                                    <CardContent className="p-4">
                                        <h2 className="text-xl font-semibold">{"Officially a Tar Heel!"}</h2>
                                        <p className="text-gray-600">{"August 2024"}</p>
                                    </CardContent>  
                                </Card>
                            </TimelineContent>
                        </TimelineItem>




                    </Timeline>
                </div>
            </main>
        </>
    )
}