import React, { useEffect, useContext } from 'react'

import { useUserDeletion } from 'hooks/useUser'
import ModalContext from 'utils/ModalContext'
import Button from 'components/base/Button'
import Modal from 'components/base/Modal'

export default function DeleteModal() {
  const { deleteProfile, setDeleteProfile } = useContext(ModalContext)

  const mutation = useUserDeletion()

  const reset = mutation.reset
  useEffect(() => {
    reset()
  }, [deleteProfile, reset])

  return (
    <Modal open={deleteProfile} setOpen={setDeleteProfile}>
      <h3>Supprimer mon compte</h3>
      {mutation.isSuccess ? (
        <>
          <p>
            Votre compte a bien été désactivé. Vous allez recevoir sous peu un
            mail de confirmation. <br />
            La suppression complète et définitive de vos données sera effective
            dans 30 jours.
          </p>
        </>
      ) : (
        <>
          <p>
            Souhaitez vous supprimer votre compte et toutes les données
            associées ?
          </p>
          <Button.Wrapper center>
            <Button onClick={() => mutation.mutate()}>
              Supprimer mon profil
            </Button>
          </Button.Wrapper>
        </>
      )}
    </Modal>
  )
}
