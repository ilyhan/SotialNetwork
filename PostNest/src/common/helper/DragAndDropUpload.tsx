import React, { useRef } from 'react';

interface DragAndDropUploadProps {
    onFile: (file: File) => void;
    accept?: string;
    multiple?: boolean;
    children?: React.ReactNode;
};

const DragAndDropUpload = ({ onFile, accept, multiple, children }: DragAndDropUploadProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (e.dataTransfer.files) {
            Array.from(e.dataTransfer.files).forEach((file) => {
                onFile(file as File)
            })
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            Array.from(e.target.files).forEach((file) => {
                onFile(file as File)
            })
            e.target.value = '';
        }
    };

    const clickToInput = () => {
        if (inputRef.current) {
            inputRef.current.click()
        }
    }

    return (
        <div>
            <div
                onDrop={handleDrop}
                onClick={clickToInput}
                onDragOver={handleDragOver}
            >
                {children}
            </div>
            <input
                multiple={multiple}
                accept={accept}
                ref={inputRef}
                type="file"
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />
        </div>
    );
};

export default DragAndDropUpload;
