import Link from 'next/link';
import { projects } from '../../data/projects';

export const metadata = {
  title: 'Project Archive | Andrew Clausen',
};

export default function ProjectArchive() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-16 lg:px-8 lg:pt-24">
      {/* Back link */}
      <Link href="/" className="group mb-3 inline-flex items-center text-cyan hover:text-teal-300">
        <span aria-hidden="true" className="mr-2 transition-transform group-hover:-translate-x-1">←</span>
        <span className="font-bold">Andrew Clausen</span>
      </Link>

      {/* Heading */}
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl mb-6">
        All Projects
      </h1>

      {/* Table */}
      <div className="overflow-x-auto">
        <table
          id="content"
          className="mt-12 w-full border-collapse text-left border-b border-slate-300/10"
        >
          <thead>
            <tr className="text-left text-sm font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-300/10">
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
              <th className="hidden lg:table-cell py-4 pr-8 text-sm font-semibold text-slate-200">Made at</th>
              <th className="hidden lg:table-cell py-4 pr-8 text-sm font-semibold text-slate-200">Built with</th>
              <th className="hidden md:table-cell py-4 text-sm font-semibold text-slate-200">Link</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {projects.map((project) => (
              <tr key={project.id} className="align-top text-sm text-slate-400 border-b border-slate-300/10 last:border-none">
                <td className="py-4 pr-4 whitespace-nowrap text-slate-400">{project.year}</td>
                <td className="py-4 pr-4 font-medium text-slate-200">
                  {project.url ? (
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center hover:text-teal-300 focus-visible:text-teal-300"
                    >
                      {project.title}
                      <span aria-hidden="true" className="ml-1">↗</span>
                    </Link>
                  ) : (
                    project.title
                  )}
                </td>
                <td className="hidden lg:table-cell py-4 pr-4 whitespace-nowrap">{project.madeAt ?? '—'}</td>
                <td className="hidden lg:table-cell py-4 pr-4">
                  <ul className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="rounded-full bg-cyan/10 px-3 py-1 text-xs font-medium leading-5 text-cyan">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="hidden md:table-cell py-4">
                  {project.url ? (
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    >
                      {new URL(project.url).hostname}
                      <span aria-hidden="true" className="ml-1">↗</span>
                    </Link>
                  ) : (
                    '—'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
} 