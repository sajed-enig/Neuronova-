import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Upload, X, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

export function AddCourse() {
    const [files, setFiles] = useState<File[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFiles([...files, ...Array.from(e.target.files)]);
        }
    };

    const removeFile = (index: number) => {
        setFiles(files.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSuccess(true);
        setFiles([]);
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-background">
                <Header />
                <main className="max-w-3xl mx-auto px-6 py-24 text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-10 h-10 text-primary" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-medium mb-4">Course Created Successfully!</h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        Your course is being processed. You'll be notified once the adaptive content is ready.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button onClick={() => setIsSuccess(false)}>Create Another</Button>
                        <Button variant="outline" onClick={() => window.location.href = '/teacher/courses'}>View All Courses</Button>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="max-w-4xl mx-auto px-6 py-12">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-medium mb-3">Create New Course</h1>
                    <p className="text-xl text-muted-foreground">
                        Upload your materials and let NeuroNova adapt them for your students
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Course Information</CardTitle>
                            <CardDescription>Basic details about your course</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="title">Course Title</Label>
                                <Input id="title" placeholder="e.g. Advanced Quantum Mechanics" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    placeholder="Describe what students will learn in this course..."
                                    className="min-h-[120px]"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="difficulty">Difficulty Level</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select level" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="beginner">Beginner</SelectItem>
                                            <SelectItem value="intermediate">Intermediate</SelectItem>
                                            <SelectItem value="advanced">Advanced</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="theme">Course Theme</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select theme" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="science">Science & Tech</SelectItem>
                                            <SelectItem value="humanities">Humanities</SelectItem>
                                            <SelectItem value="arts">Arts & Design</SelectItem>
                                            <SelectItem value="business">Business</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Course Materials</CardTitle>
                            <CardDescription>Upload PDF, DOCX, or Slides to generate adaptive content</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div
                                className="border-2 border-dashed rounded-xl p-12 text-center hover:border-primary/50 transition-colors cursor-pointer bg-primary/5"
                                onClick={() => document.getElementById('file-upload')?.click()}
                            >
                                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                                <h3 className="text-lg font-medium mb-1">Click to upload or drag and drop</h3>
                                <p className="text-sm text-muted-foreground">Support for PDF, DOCX, PPTX, TXT</p>
                                <input
                                    id="file-upload"
                                    type="file"
                                    multiple
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                            </div>

                            {files.length > 0 && (
                                <div className="space-y-3">
                                    <Label>Uploaded Files ({files.length})</Label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {files.map((file, index) => (
                                            <div key={index} className="flex items-center justify-between p-3 border rounded-lg bg-card">
                                                <div className="flex items-center gap-3">
                                                    <FileText className="w-5 h-5 text-primary" />
                                                    <span className="text-sm font-medium truncate max-w-[200px]">{file.name}</span>
                                                </div>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        removeFile(index);
                                                    }}
                                                >
                                                    <X className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                                <AlertCircle className="w-5 h-5 text-muted-foreground mt-0.5" />
                                <div className="text-sm text-muted-foreground">
                                    NeuroNova will analyze these files to create personalized lesson paths,
                                    summaries, and interactive quizzes for your students.
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-end border-t pt-6">
                            <Button type="submit" disabled={isSubmitting || files.length === 0} className="w-full md:w-auto min-w-[150px]">
                                {isSubmitting ? 'Creating Course...' : 'Create Course'}
                            </Button>
                        </CardFooter>
                    </Card>
                </form>
            </main>
        </div>
    );
}
