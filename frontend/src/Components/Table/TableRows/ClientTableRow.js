import React from 'react'
import TableBtn from '../../Buttons/TableBtn'
import {map} from 'lodash'
import {universalToast} from '../../ToastMessages/ToastMessages'
export const ClientTableRow = ({
    data,
    currentPage,
    countPage,
    Edit,
    Delete,
    Print,
}) => {
    return (
        <>
            {map(data, (client, index) => (
                <tr className='tr' key={client._id}>
                    <td className='text-left td'>
                        {currentPage * countPage + index + 1}
                    </td>
                    <td className='text-left td'>
                        {client.packman ? client.packman.name : ''}
                    </td>
                    <td className='text-left td'>{client.name}</td>
                    <td className='border-r-0 td py-[0.375rem]'>
                        <div className='flex items-center justify-center gap-[0.625rem]'>
                            <TableBtn
                                type={'print'}
                                bgcolor={'bg-primary-800'}
                                onClick={() => {
                                    if (client.saleconnector) {
                                        Print(client?.saleconnector)
                                    } else {
                                        universalToast(
                                            'Mijozda sotuv bulmagan!',
                                            'warning'
                                        )
                                    }
                                }}
                            />
                            <TableBtn
                                type={'edit'}
                                bgcolor={'bg-warning-500'}
                                onClick={() => Edit(client)}
                            />
                            <TableBtn
                                type={'delete'}
                                bgcolor={'bg-error-500'}
                                onClick={() => Delete(client)}
                            />
                        </div>
                    </td>
                </tr>
            ))}
        </>
    )
}
