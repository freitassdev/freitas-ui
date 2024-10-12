interface ComponentPropsItem {
    prop: string;
    type: string;
    default?: string;
    description: string;
}
interface ComponentProps {
    props: ComponentPropsItem[];
}

export default function ComponentProps({ props }: ComponentProps) {
    props.sort((a, b) => a.prop.localeCompare(b.prop));

    return (
        <div className="overflow-hidden rounded-xl border border-muted">
            <table className="w-full text-md">
                <thead>
                    <tr className="m-0 p-0 text-sm bg-muted">
                        <th className="border-b border-r border-border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right text-md">
                            Prop
                        </th>
                        <th className="border-b border-r border-border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right text-md">
                            Type
                        </th>
                        <th className="border-b border-r border-border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right text-md">
                            Default
                        </th>
                        <th className="border-b border-border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right text-md">
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.map((item, index) => (
                        <tr key={item.prop} className={index % 2 === 0 ? 'bg-background' : 'bg-card'}>
                            <td className="border-r border-muted px-4 py-2 font-light">{item.prop}</td>
                            <td className="border-r border-muted px-4 py-2 font-light">{item.type}</td>
                            <td className="border-r border-muted px-4 py-2 font-light">{item.default ?? "-"}</td>
                            <td className="px-4 py-2 font-light">{item.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
