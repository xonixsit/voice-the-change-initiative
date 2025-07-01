
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Upload, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

const CreatePetition = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    target: "",
    recipientName: "",
    recipientTitle: "",
    recipientEmail: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Petition submitted:", formData);
    // Here you would typically send to backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">PetitionHub</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Browse</Link>
              <Link to="/create" className="text-blue-600 font-medium">Start a Petition</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Start Your Petition</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create a petition to rally support for the causes you care about. Every great movement starts with a single voice.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">1</div>
              <span className="text-sm text-blue-600 font-medium ml-2">Petition Details</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-medium">2</div>
              <span className="text-sm text-gray-500 ml-2">Review & Publish</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Main Petition Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Petition Information
              </CardTitle>
              <CardDescription>
                Tell people what you're fighting for and why it matters.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="title" className="text-base font-medium">Petition Title</Label>
                <Input
                  id="title"
                  placeholder="e.g., Save our local community center from closure"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className="mt-2"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">Make it clear and compelling</p>
              </div>

              <div>
                <Label htmlFor="description" className="text-base font-medium">Tell Your Story</Label>
                <Textarea
                  id="description"
                  placeholder="Explain why this petition matters, what you hope to achieve, and why people should care..."
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  className="mt-2 min-h-[120px]"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">Include specific details and personal experiences</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category" className="text-base font-medium">Category</Label>
                  <Select onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="environment">Environment</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="social-justice">Social Justice</SelectItem>
                      <SelectItem value="animal-rights">Animal Rights</SelectItem>
                      <SelectItem value="politics">Politics</SelectItem>
                      <SelectItem value="community">Community</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="target" className="text-base font-medium">Signature Goal</Label>
                  <Input
                    id="target"
                    type="number"
                    placeholder="e.g., 1000"
                    value={formData.target}
                    onChange={(e) => handleInputChange("target", e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Decision Maker Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Decision Maker
              </CardTitle>
              <CardDescription>
                Who has the power to make the change you're seeking?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="recipientName" className="text-base font-medium">Name</Label>
                  <Input
                    id="recipientName"
                    placeholder="e.g., Mayor John Smith"
                    value={formData.recipientName}
                    onChange={(e) => handleInputChange("recipientName", e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="recipientTitle" className="text-base font-medium">Title/Position</Label>
                  <Input
                    id="recipientTitle"
                    placeholder="e.g., Mayor of Springfield"
                    value={formData.recipientTitle}
                    onChange={(e) => handleInputChange("recipientTitle", e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="recipientEmail" className="text-base font-medium">Email Address (Optional)</Label>
                <Input
                  id="recipientEmail"
                  type="email"
                  placeholder="e.g., mayor@springfield.gov"
                  value={formData.recipientEmail}
                  onChange={(e) => handleInputChange("recipientEmail", e.target.value)}
                  className="mt-2"
                />
                <p className="text-sm text-gray-500 mt-1">We'll help deliver your petition when you reach your goal</p>
              </div>
            </CardContent>
          </Card>

          {/* Photo Upload */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Add a Photo (Optional)
              </CardTitle>
              <CardDescription>
                A compelling image can make your petition more engaging and shareable.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Drag and drop your photo here, or</p>
                <Button variant="outline" type="button">Choose File</Button>
                <p className="text-sm text-gray-500 mt-2">Recommended: 1200x630px, JPG or PNG</p>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="px-8"
              onClick={() => window.history.back()}
            >
              Save as Draft
            </Button>
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-8"
            >
              Preview Petition
            </Button>
          </div>
        </form>

        {/* Tips Section */}
        <Card className="mt-12 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-900">Tips for a Successful Petition</CardTitle>
          </CardHeader>
          <CardContent className="text-blue-800">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Users className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Be specific about what you want and who can make it happen</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Include personal stories and explain why this matters to you</span>
              </li>
              <li className="flex items-start gap-2">
                <FileText className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Use clear, compelling language that motivates people to take action</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreatePetition;
