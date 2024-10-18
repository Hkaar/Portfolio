export default function SkillContent({ ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className={`${props.className} px-6 py-4`}>
      {props.children}
    </div>
  );
}
