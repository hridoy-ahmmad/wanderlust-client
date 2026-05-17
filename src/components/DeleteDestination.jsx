"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

export function DeleteDestination({ data }) {
    const router = useRouter()
    const handleDelete = async () => {
        const res = await fetch(`http://localhost:5000/destinations/${data._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        const deletedData = await res.json()
        if(deletedData.deletedCount > 0){
            router.push('/destinations')
        }

    }
    return (
        <AlertDialog>
            <Button variant="danger">Delete Destination</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete <strong>{data.destinationName}</strong> permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{data.destinationName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}