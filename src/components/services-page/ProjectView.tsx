"use client";
import { ServicesProjectsType } from "@/src/types/data-type";
import { Row, Col, Empty } from "antd";
import { useState, useCallback } from "react";
import ProjectCard from "./ProjectCard";
import ImageGallery from "./ImageGallery";
import { FiGrid, FiList } from "react-icons/fi";

interface ProjectViewProps {
  projects: ServicesProjectsType[];
  serviceTitle?: string;
}

function ProjectView({ projects, serviceTitle }: ProjectViewProps) {
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] =
    useState<ServicesProjectsType | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const handleOpenModal = useCallback((project: ServicesProjectsType) => {
    setSelectedProject(project);
    setViewModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setViewModal(false);
    setSelectedProject(null);
  }, []);

  if (projects.length === 0) {
    return (
      <div className="text-center py-16">
        <Empty
          description={
            <div>
              <p className="text-gray-600 text-lg mb-2">
                لا توجد مشاريع متاحة حالياً
              </p>
              <p className="text-gray-500">سيتم إضافة مشاريع قريباً</p>
            </div>
          }
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header */}
      <div className="p-4 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              مشاريع <span className="text-calypso-600">{serviceTitle}</span>
            </h2>
            <p className="text-gray-600 mt-2">
              عرض {projects.length} مشروع تم تنفيذها بنجاح
            </p>
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-all ${
                  viewMode === "grid"
                    ? "bg-white text-calypso-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <FiGrid className="text-lg" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-all ${
                  viewMode === "list"
                    ? "bg-white text-calypso-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <FiList className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <Row
        gutter={[24, 32]}
        className={`p-4 ${viewMode === "list" ? "flex flex-col gap-6" : ""}`}
      >
        {projects.map((item) => (
          <Col
            key={item.id}
            xs={24}
            sm={viewMode === "list" ? 24 : 12}
            md={viewMode === "list" ? 24 : 8}
            lg={viewMode === "list" ? 24 : 6}
          >
            <ProjectCard
              item={item}
              onOpen={handleOpenModal}
              viewMode={viewMode}
            />
          </Col>
        ))}
      </Row>

      {/* Image Gallery Modal */}
      <ImageGallery
        isOpen={viewModal}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </div>
  );
}

export default ProjectView;
