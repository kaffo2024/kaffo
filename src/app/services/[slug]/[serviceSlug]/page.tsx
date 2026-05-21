import { getServicesProjects } from "@/src/actions/actions";
import ProjectView from "@/src/components/services-page/ProjectView";
import ServiceHeader from "@/src/components/services-page/ServiceHeader";
import { Metadata } from "next";
import { FiHome } from "react-icons/fi";
import { HiOutlineTemplate, HiOutlineFolder } from "react-icons/hi";

const serviceProjects = async (slug: string) => {
  try {
    const projects = await getServicesProjects(slug);
    return projects;
  } catch {
    return [];
  }
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}): Promise<Metadata> {
  const { serviceSlug } = await params;
  const title = decodeURIComponent(serviceSlug).replaceAll("-", " ");

  return {
    title: `${title} - مشاريعنا | Kaffo`,
    description: `استعرض مشاريع ${title} التي قمنا بتنفيذها لشركائنا بنجاح.`,
  };
}

async function ServiceProjectsPage({
  params,
}: {
  params: Promise<{ serviceSlug: string; slug: "market" | "coding" }>;
}) {
  const { serviceSlug, slug } = await params;
  const title = decodeURIComponent(serviceSlug).replaceAll("-", " ");
  const projects = await serviceProjects(serviceSlug);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Modern Header */}
      <div>
        <ServiceHeader
          background="/pages-headers/services.jpg"
          title={title}
          breadcrumbs={[
            {
              title: "الرئيسية",
              href: "/",
              icon: <FiHome />,
            },
            {
              title: "الخدمات",
              href: "/services",
              icon: <HiOutlineTemplate />,
            },
            {
              title: slug === "market" ? "التسويقية" : "البرمجية",
              href: `/services/${slug}`,
              icon: <HiOutlineFolder />,
            },
            {
              title: title,
            },
          ]}
        />
      </div>

      {/* Projects Section */}
      <div className="py-8 md:py-12">
        <ProjectView projects={projects} serviceTitle={title} />
      </div>
    </div>
  );
}

export default ServiceProjectsPage;
