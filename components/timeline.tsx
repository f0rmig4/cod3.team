import Image from "next/image";

export default function Timeline() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Process</h1>
            <p className="text-xl text-gray-400">
              Our development process is based on two-week Sprints, following
              agile methodologies that ensure flexibility and results. Each
              sprint is a focused work unit that builds our projects
              systematically - from user research and wireframes to development
              and testing. We deliver products at different levels based on your
              needs and market requirements.
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20"></div>
          <div className="timeline">
            <div className="item blb0">
              <span>Prototype</span>
              - Visual and technical proof of concept
              <br />
              - Useful for user testing to inform decisions
              <br />
              - Useful for demonstrating concept for funding
              <br />
              - Process focuses on rapid development
              <br />
              - Little to no back-end development involved
              <br />
              - Not suitable for market launch
              <br />- Quick development and lower cost, typically 1-3 sprints
            </div>
            <div className="item brb0">
              <span>Product Launch</span>
              - Suitable for establishing a product in the market and gathering
              insights and analytics
              <br />
              - Processes focus on feature development
              <br />
              - Reasonable investment in testing
              <br />
              - Result is suitable for market launch
              <br />- Typically 5-8 sprints
            </div>
            <div className="item blb0">
              <span>Complete Product</span>
              - Major investment in end-to-end testing and integration testing
              to prevent deployment of broken functionality and identify issues
              as they arise
              <br />
              - Testing emphasis accommodates large user volumes
              <br />
              - Prioritizes stability, security, and scalability
              <br />- Longer development time 10+ Sprints
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
