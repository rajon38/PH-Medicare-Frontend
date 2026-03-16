'use client'

import { getDoctors } from "@/services/doctor.services"
import { useQuery } from "@tanstack/react-query"
import { IDoctor } from "@/types/doctor.types";
import DataTable from "@/components/shared/table/DataTable";
import { doctorColumns } from "./doctorsColumns";


const DoctorsTable = ({queryString, queryParamsObjects}: { queryString: string; queryParamsObjects: { [key: string]: string | string[] | undefined } }) => {

    // const doctorColumns: ColumnDef<IDoctor>[] =[
    //     { accessorKey: 'name', header: 'Name' },
    //     //{ accessorKey: 'specialization', header: 'Specialization' },
    //     { accessorKey: 'experience', header: 'Experience (years)' },
    //     //{ accessorKey: 'rating', header: 'Rating' },
    // ]

    const { data: doctorDataResponse , isLoading } = useQuery({
        queryKey: ['doctors', queryParamsObjects],
        queryFn: () => getDoctors(queryString)
    })

    const { data: doctors } = doctorDataResponse! || [] ;

    const handleView = (doctor: IDoctor) => {
        console.log('View doctor:', doctor);
    }

    const handleEdit = (doctor: IDoctor) => {
        console.log('Edit doctor:', doctor);
    }
    
    const handleDelete = (doctor: IDoctor) => {
        console.log('Delete doctor:', doctor);
    }

    // const { getHeaderGroups, getRowModel } = useReactTable({ 
    //     data: doctors, 
    //     columns: doctorColumns, 
    //     getCoreRowModel: getCoreRowModel() 
    // })

    console.log(doctors);
    // return (
    //         <Table>
    //             <TableHeader>
    //                 {getHeaderGroups().map((hg) => (
    //                 <TableRow key={hg.id}>
    //                     {hg.headers.map((header) => (
    //                     <TableHead key={header.id}>
    //                         {flexRender(header.column.columnDef.header, header.getContext())}
    //                     </TableHead>
    //                     ))}
    //                 </TableRow>
    //                 ))}
    //             </TableHeader>
    //             <TableBody>
    //                 {getRowModel().rows.map((row) => (
    //                 <TableRow key={row.id}>
    //                     {row.getVisibleCells().map((cell) => (
    //                     <TableCell key={cell.id}>
    //                         {flexRender(cell.column.columnDef.cell, cell.getContext())}
    //                     </TableCell>
    //                     ))}
    //                 </TableRow>
    //                 ))}
    //             </TableBody>
    //         </Table>
    // )
    return (
        <DataTable
            data={doctors}
            columns={doctorColumns}
            isLoading={isLoading}
            emptyMessage="No Doctors Found"
            actions={
                {
                    onView: handleView,
                    onEdit: handleEdit,
                    onDelete: handleDelete,
                }
            }
        />
    )
}

export default DoctorsTable