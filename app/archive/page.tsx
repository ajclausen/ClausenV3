import Link from 'next/link';
import { projects } from '../../data/projects';

export const metadata = {
  title: 'Project Archive | Andrew Clausen',
};

export default function ProjectArchive() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-16 lg:px-8 lg:pt-24">
      {/* Back link */}
      <Link href="/" className="group mb-3 inline-flex items-center text-dracula-cyan hover:text-dracula-pink">
        <span aria-hidden="true" className="mr-2 transition-transform group-hover:-translate-x-1">←</span>
        <span className="font-bold">Andrew Clausen</span>
      </Link>

      {/* Heading */}
      <h1 className="text-4xl font-bold tracking-tight text-dracula-foreground sm:text-5xl mb-6">
        All Projects
      </h1>

      {/* Table */}
      <div className="overflow-x-auto">
        <table
          id="content"
          className="mt-12 w-full border-collapse text-left border-b border-dracula-current-line/10"
        >
          <thead>
            <tr className="text-left text-sm font-semibold uppercase tracking-wider text-dracula-foreground border-b border-dracula-current-line/10">
              <th className="py-4 pr-8 text-sm font-semibold text-dracula-foreground">Year</th>
              <th className="py-4 pr-8 text-sm font-semibold text-dracula-foreground">Project</th>
              <th className="hidden lg:table-cell py-4 pr-8 text-sm font-semibold text-dracula-foreground">Made at</th>
              <th className="hidden lg:table-cell py-4 pr-8 text-sm font-semibold text-dracula-foreground">Built with</th>
              <th className="hidden md:table-cell py-4 text-sm font-semibold text-dracula-foreground">Link</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dracula-current-line/60">
            {projects.map((project) => (
              <tr key={project.id} className="align-top text-sm text-dracula-foreground border-b border-dracula-current-line/10 last:border-none">
                <td className="py-4 pr-4 whitespace-nowrap text-dracula-foreground">{project.year}</td>
                <td className="py-4 pr-4 font-medium text-dracula-foreground">
                  {project.url ? (
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center hover:text-dracula-pink focus-visible:text-dracula-pink"
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
                      <li key={tech} className="rounded-full bg-dracula-purple/10 px-3 py-1 text-xs font-medium leading-5 text-dracula-purple">
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
                      className="inline-flex items-center text-dracula-green hover:text-dracula-pink focus-visible:text-dracula-pink"
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