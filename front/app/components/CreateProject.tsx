import React, {useState} from 'react';
import {CldUploadWidget, CldUploadWidgetResults} from "next-cloudinary";
import {Button, Card} from "@mui/material";
import TextField from '@mui/material/TextField';
import {Project} from "@/app/components/sections/ProjectSection";

interface CreateProjectProps {
    project: Project;
    setProject: React.Dispatch<React.SetStateAction<Project>>;
}

const CreateProject: React.FC<CreateProjectProps> = ({
    project, setProject
                                                     }) => {
    const [imageHover , setImageHover] = useState(false);

    const onSuccess = (results: CldUploadWidgetResults, widget: any) => {
        if (typeof results.info === 'object' && 'url' in results.info) {
            // results.info가 객체이며 'url' 속성이 있는 경우
            const imageUrl = results.info.url?.toString();
            setProject((prevState) => ({
                ...prevState, image: imageUrl || ''
            }));

            widget.close();
        }
    };

    const openWidgetButton = (text: string) => {
        return (
            <CldUploadWidget uploadPreset="iivrfeb3"
                             onSuccess={onSuccess}
            >
                {({ open }) => {
                    const onClick = () => {
                        open();
                    }
                    return (
                        <div>
                            <Button
                                className="
                                    transition
                                    bg-gray-800
                                    hover:bg-gray-600
                                    text-white
                                "
                                variant={"contained"}
                                onClick={() => onClick()}
                            >
                                {text}
                            </Button>
                        </div>
                    );
                }}
            </CldUploadWidget>
        )
    }

    return (
        <Card className="p-4">
            <div className="h-3/4 w-full ring-2 items-center justify-center flex">
                {project.image ? (
                    <div className="w-full h-full items-center flex justify-center bg-white
                         relative"
                         onMouseEnter={() => setImageHover(true)}
                         onMouseLeave={() => setImageHover(false)}
                    >
                        <img src={project.image} className="w-full h-full object-contain"/>

                        <div className="absolute">
                            { imageHover && openWidgetButton('Change Image')}
                        </div>

                    </div>
                ) : (
                    <div>
                        {openWidgetButton('Upload Image')}
                    </div>
                )}
            </div>
            <TextField variant={"standard"} size={"small"} className="mt-1" value={project.title}
                       onChange={(event) => setProject((prevState) => ({
                           ...prevState, title: event.target.value
                       }))}
            />
            <TextField variant={"standard"} size={"small"} value={project.summary}
                       onChange={(event) => setProject((prevState) => ({
                           ...prevState, summary: event.target.value
                       }))}
            />
            <Button className="absolute bottom-0" color={"info"}>등록</Button>
        </Card>
    );
};

export default CreateProject;