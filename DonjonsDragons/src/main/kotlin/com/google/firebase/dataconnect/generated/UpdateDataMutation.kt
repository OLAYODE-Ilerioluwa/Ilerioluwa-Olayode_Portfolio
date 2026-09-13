
@file:Suppress(
  "KotlinRedundantDiagnosticSuppress",
  "PropertyName",
  "MayBeConstant",
  "RedundantVisibilityModifier",
  "RedundantCompanionReference",
  "RemoveEmptyClassBody",
  "SpellCheckingInspection",
  "unused",
)

package com.google.firebase.dataconnect.generated



public interface UpdateDataMutation :
    com.google.firebase.dataconnect.generated.GeneratedMutation<
      ExampleConnector,
      UpdateDataMutation.Data,
      Unit
    >
{
  

  
    @kotlinx.serialization.Serializable
  public data class Data(
  
    val client_update: ClientKey?,
  
    val project_update: ProjectKey?,
  
    val lead_update: LeadKey?,
  
    val milestone_update: MilestoneKey?,
  
    val asset_update: AssetKey?,
  
  ) {
    
    
  }
  

  public companion object {
    public val operationName: String = "UpdateData"

    public val dataDeserializer: kotlinx.serialization.DeserializationStrategy<Data> =
      kotlinx.serialization.serializer()

    public val variablesSerializer: kotlinx.serialization.SerializationStrategy<Unit> =
      kotlinx.serialization.serializer()
  }
}

public fun UpdateDataMutation.ref(
  
): com.google.firebase.dataconnect.MutationRef<
    UpdateDataMutation.Data,
    Unit
  > =
  ref(
    
      Unit
    
  )

public suspend fun UpdateDataMutation.execute(

  

  ): com.google.firebase.dataconnect.MutationResult<
    UpdateDataMutation.Data,
    Unit
  > =
  ref(
    
  ).execute()


