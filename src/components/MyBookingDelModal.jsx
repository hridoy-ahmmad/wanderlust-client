"use client";

import { AlertDialog, Button } from "@heroui/react";

import { FiTrash2 } from "react-icons/fi";

export function MyBookingDelModal({ item }) {

    const handleDelete = async () => {
        const res = await fetch(`http://localhost:5000/bookings/${item._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        const data = await res.json()
        if (data.deletedCount > 0) {
            window.location.reload()
        }



    }
    return (
        <AlertDialog>
            <Button
                variant='warning'
                className="bg-red-100 rounded-none">
                <FiTrash2 className="w-[18px] h-[18px]" />
                <span>Cancel</span>
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>My Awesome Project</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Remove destination
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}