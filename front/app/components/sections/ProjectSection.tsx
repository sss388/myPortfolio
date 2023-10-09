'use client'

import React, {useEffect, useState} from 'react';
import {Box, Button, Card, Divider, IconButton, Modal, Typography} from "@mui/material";

import 'swiper/css';
import 'swiper/css/navigation';
import '@/public/projects/slide.css'
import {Cancel, PlusOne, Save} from "@mui/icons-material";
import {CldUploadButton, CldUploadWidget} from "next-cloudinary";
import CreateProject from "@/app/components/CreateProject";
import axios from "axios";
import ProjectModal from "@/app/components/modals/ProjectModal";
import {useSession} from "next-auth/react";

export interface Project {
    id?: string;
    image: string;
    title: string;
    summary: string;
}

const ProjectSection = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    const [create, setCreate] = useState(false);
    const [project, setProject] = useState<Project>({
        image: '', title: '', summary: '',
    });

    const [modal, setModal] = useState(false)
    const [selectedId, setSelectedId] = useState('')
    const { data: session } = useSession();

    useEffect(() => {
        const getProjects = async () => {
            await axios.get('http://localhost:8090/project/getall')
                .then((res) => {
                    setProjects(res.data)
                    // console.log(res.data);
                }).catch((err) => {
                    console.log(err)
                })
        }
        getProjects()
    },[])

    useEffect(() => {
        setProject({image: '', title: '', summary: ''});
    },[create])

    const saveProject = async () => {
        setCreate(false)

        await axios.post('http://localhost:8090/project/create', project)
            .then((res) => {
                project.id = res.data;
            }).catch((err) => {
                console.log(err);
            })

        setProjects((prevState) => {
            let list: Project[] = []
            list.push(project)
            list.push(...prevState)
            return list;
        })
    }

    const deleteProject = async (id: string) => {
        await axios.delete(`http://localhost:8090/project/delete/${id}`)
            .then((res) => {
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
            })

        setProjects((prevState) => {
            // id가 일치하지 않는 프로젝트만 필터링
            const updatedProjects = prevState.filter((project) => project.id !== id);
            return updatedProjects;
        });
    }

    const openModal = (id: string) => {
        setModal(true);
        setSelectedId(id);
    }

    return (
        <Box className="bg-lime-200 p-8 justify-center flex min-h-[1000px] relative">
            <Box className="w-[1024px] relative">
                <Typography sx={{color: 'black',
                    textAlign: 'center',
                    fontFamily: 'Black Han Sans',
                    fontSize: '48px'}}
                >
                    Projects
                </Typography>
                <div className="justify-end flex h-[40px]">
                    {session?.user?.email === process.env.NEXT_PUBLIC_MY_EMAIL as string && (
                        <>
                            {create ? (
                                <>
                                    <IconButton onClick={() => saveProject()}>
                                        <Save color={"info"}/>
                                    </IconButton>
                                    <IconButton onClick={() => setCreate(false)}>
                                        <Cancel color={"error"}/>
                                    </IconButton>
                                </>
                                ) : (
                                <IconButton onClick={() => setCreate(true)}>
                                    <PlusOne color={"inherit"}/>
                                </IconButton>
                            )}
                        </>
                    )}
                </div>
                <Divider color={'black'} className="mb-8 opacity-25"/>
                <div className="grid grid-cols-4 gap-3 h-[250px]">
                    {create && (
                        <CreateProject project={project} setProject={setProject} />
                    )}

                    {projects.map((project, index) => (
                        <Card className="p-4 relative transition ease-in-out duration-300 hover:scale-110 cursor-pointer"
                              key={index} onClick={() => openModal(project.id || '')}
                        >
                            <div className="h-3/4 w-full">
                                <img src={project.image} className="w-full h-full object-contain"/>
                            </div>

                            <div>
                                <Typography
                                    sx={{
                                        textAlign: 'left',
                                        fontFamily: 'noto',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                    }}
                                    className="mt-1"
                                >
                                    {project.title}
                                </Typography>

                                <Typography
                                    sx={{
                                        textAlign: 'left',
                                        fontFamily: 'noto',
                                        fontSize: '12px',
                                    }}
                                >
                                    {project.summary}
                                </Typography>
                            </div>
                            <Box className="bg-red-500 w-[50px] h-[50px] absolute rounded-full
                                right-[-25px] hover:scale-[150%] hover:bg-red-300 ease-in-out duration-300
                                cursor-pointer"
                                 onClick={(event) => {
                                     event.stopPropagation()
                                     deleteProject(project.id || '')
                                 }}
                            />
                        </Card>
                    ))}
                </div>
            </Box>
            <ProjectModal modal={modal} setModal={setModal} selectedId={selectedId} email={session?.user?.email || ''}/>
        </Box>
    );
};

export default ProjectSection;