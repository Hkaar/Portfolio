interface SkillContentProps extends React.HTMLAttributes<HTMLElement> {}

export default function SkillContent({ ...props }: SkillContentProps) {
  return (
    <div className={`${props.className} px-6 py-4`}>
      {props.children}
    </div>
  );
}
