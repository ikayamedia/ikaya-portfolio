import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

interface WorkProps {
  onSelectProject: (project: Project) => void;
}

type FilterCategory = 'all' | 'brand' | 'digital' | 'direction';

export default function Work({ onSelectProject }: WorkProps) {
  const [filter, setFilter] = useState<FilterCategory>('all');

  const filteredProjects = PROJECTS.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  const categories: { label: string; value: FilterCategory }[] = [
    { label: 'All Cases', value: 'all' },
    { label: 'Brand Identity', value: 'brand' },
    { label: 'Digital Systems', value: 'digital' },
    { label: 'Creative Direction', value: 'direction' }
  ];

  return (
    <section
      id="work"
      className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 max-w-[1600px] mx-auto border-b border-neutral-100 dark:border-neutral-900"
    >
      {/* Background grid line helper */}
      <div className="absolute left-4 sm:left-6 md:left-12 top-0 bottom-0 w-[1px] bg-neutral-100 dark:bg-neutral-900/30 pointer-events-none" />
      <div className="absolute right-4 sm:right-6 md:right-12 top-0 bottom-0 w-[1px] bg-neutral-100 dark:bg-neutral-900/30 pointer-events-none" />

      {/* Header section with category filter */}
      <div id="work-header" className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 border-b border-neutral-100 dark:border-neutral-900 pb-8 sm:pb-12 mb-10 sm:mb-16">
        <div>
          <span className="font-sans text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.25em] block mb-3">
            01 / ARCHIVES
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-sans font-bold tracking-[-0.03em] uppercase text-neutral-900 dark:text-neutral-50">
            SELECTED CASES
          </h2>
        </div>

        {/* Filter Tabs */}
        <div id="work-filter-tabs" className="flex flex-wrap gap-2 sm:gap-4 font-sans">
          {categories.map((cat) => {
            const isSelected = filter === cat.value;
            return (
              <button
                id={`work-filter-${cat.value}`}
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`relative pb-1 uppercase text-[10px] font-bold tracking-[0.2em] transition-all duration-300 rounded-none cursor-pointer border-b-2 ${
                  isSelected
                    ? 'border-neutral-900 text-neutral-900 dark:border-neutral-50 dark:text-neutral-50'
                    : 'border-transparent text-neutral-900/40 hover:text-neutral-900 dark:text-neutral-50/40 dark:hover:text-neutral-50'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid with AnimatePresence */}
      <motion.div
        id="work-projects-grid"
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-x-16 md:gap-y-24 pl-0 md:pl-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              id={`project-card-container-${project.id}`}
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="group cursor-pointer flex flex-col"
              onClick={() => onSelectProject(project)}
              data-cursor="view"
            >
              {/* Media Thumbnail Container */}
              <div
                id={`project-media-frame-${project.id}`}
                className="relative aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-900 mb-5"
              >
                {/* Image element with standard attributes */}
                <img
                  id={`project-image-${project.id}`}
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-105"
                />

                {/* Accent colored glowing background gradient on hover */}
                <div
                  id={`project-accent-glow-${project.id}`}
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ backgroundColor: project.accentColor }}
                />

                {/* Fast tag displaying category */}
                <div id={`project-badge-${project.id}`} className="absolute top-4 left-4 bg-neutral-950 text-neutral-100 px-3 py-1.5 font-sans text-[9px] font-bold tracking-[0.2em] uppercase">
                  {project.categoryLabel}
                </div>
              </div>

              {/* Card Metadata & Specs */}
              <div id={`project-specs-${project.id}`} className="flex justify-between items-baseline mt-2">
                <div className="flex flex-col gap-1">
                  {/* Project Title */}
                  <h3 id={`project-title-${project.id}`} className="text-lg sm:text-xl font-sans font-bold tracking-[-0.02em] uppercase text-neutral-900 dark:text-neutral-50 flex items-center gap-1.5 group-hover:text-neutral-900/60 dark:group-hover:text-neutral-50/60 transition-colors duration-300">
                    {project.title}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                  {/* Short subtitle details */}
                  <p id={`project-subtitle-${project.id}`} className="text-xs sm:text-sm text-neutral-900/60 dark:text-neutral-50/60 font-sans font-normal">
                    {project.subtitle}
                  </p>
                </div>

                {/* Monospace Year Label */}
                <span id={`project-year-${project.id}`} className="font-sans text-[10px] font-bold text-neutral-900/40 dark:text-neutral-50/40 uppercase tracking-[0.2em]">
                  {project.year}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
